import streamlit as st
import pandas as pd
import joblib
import numpy as np
import lime
import lime.lime_tabular
import matplotlib.pyplot as plt
import time
from tensorflow.keras.models import load_model

# ----------------- CONFIGURASI HALAMAN ------------------
st.set_page_config(
    page_title="UMKMConnect",
    page_icon="LOGOjadi.png",  # Ganti dengan path logo Anda
    layout="centered",
    initial_sidebar_state="expanded"
)

# ----------------- HEADER & LOGO ------------------
st.markdown("<h1 style='margin-bottom: 0;'>Dashboard Simulasi dan Rekomendasi Usaha Mikro 📊</h1>", unsafe_allow_html=True)
st.markdown("<small>Aplikasi ini memprediksi kelas Usaha_Mikro, menjelaskan faktor pengaruhnya (LIME), "
    "dan memberikan rekomendasi strategis untuk peningkatan kelas.</small>", unsafe_allow_html=True)
st.markdown("---")

@st.cache_resource
def load_model_and_data():
    try:
        model = load_model('best_umkm_model.keras')
        scaler = joblib.load('umkm_scaler.pkl')
        X_train = pd.read_csv('X_train_lime.csv')
        X_train_scaled = scaler.transform(X_train)
        train_clusters = np.argmax(model.predict(X_train_scaled), axis=1)
        X_train_with_clusters = X_train.copy()
        X_train_with_clusters['Cluster'] = train_clusters
        centroids = X_train_with_clusters.groupby('Cluster').mean(numeric_only=True)
        explainer = lime.lime_tabular.LimeTabularExplainer(
            training_data=X_train_scaled,
            feature_names=X_train.columns.tolist(),
            class_names=['Mikro Berkembang', 'Mikro Unggul', 'Mikro Subsisten'],
            mode='classification'
        )
        return model, scaler, explainer, X_train, centroids
    except FileNotFoundError as e:
        st.error(f"File tidak ditemukan: {e.filename}")
        return None, None, None, None, None
    except Exception as e:
        st.error(f"Terjadi error saat memuat data: {e}")
        return None, None, None, None, None

def user_input_features():
    st.sidebar.image("LOGOjadi.png", use_container_width=True)
    st.sidebar.header("Masukkan Parameter Simulasi")
    omzet = st.sidebar.number_input('Omzet Bulanan (Juta Rp)', 0.5, 160.0, 25.0, 0.5)
    laba = st.sidebar.number_input('Laba Bersih Bulanan (Juta Rp)', -10.0, 70.0, 5.0, 0.5)
    karyawan = st.sidebar.slider('Jumlah Karyawan', 1, 10, 2)
    aset = st.sidebar.number_input('Total Aset (Juta Rp)', 1.0, 500.0, 40.0, 1.0)
    pencatatan = st.sidebar.slider('Pencatatan Keuangan (1-3)', 1, 3, 2)
    digitalisasi = st.sidebar.slider('Tingkat Digitalisasi (1-4)', 1, 4, 3)

    data = {
        'Omzet_Bulanan_Juta_Rp': omzet,
        'Laba_Bersih_Bulanan_Juta_Rp': laba,
        'Jumlah_Karyawan': karyawan,
        'Total_Aset_Juta_Rp': aset,
        'Pencatatan_Keuangan_1_3': pencatatan,
        'Tingkat_Digitalisasi_1_4': digitalisasi
    }
    return pd.DataFrame(data, index=[0])

# ----------------- MAIN ------------------
model, scaler, explainer, X_train, centroids = load_model_and_data()
input_df = user_input_features()

st.subheader('Data Usaha_Mikro yang Disimulasikan:')
st.write(input_df)

if st.button('Jalankan Prediksi dan Analisis'):
    if all(v is not None for v in [model, explainer, X_train, centroids]):
        scaled_input = scaler.transform(input_df)
        prediction_proba = model.predict(scaled_input)
        Usaha_Mikro_cluster = np.argmax(prediction_proba, axis=1)

        cluster_ranking = centroids.sort_values('Omzet_Bulanan_Juta_Rp').index.tolist()
        low_cluster, mid_cluster, high_cluster = cluster_ranking
        cluster_labels = {
            low_cluster: 'Mikro Subsisten',
            mid_cluster: 'Mikro Berkembang',
            high_cluster: 'Mikro Unggul'
        }

        predicted_cluster = int(Usaha_Mikro_cluster[0])
        nama_kelas_prediksi = cluster_labels[predicted_cluster]

        st.header('Hasil Analisis')
        st.subheader('1. Hasil Prediksi')
        st.success(f"Usaha_Mikro ini diprediksi masuk ke dalam kelas: **{nama_kelas_prediksi}**")

        st.write("**Probabilitas prediksi untuk setiap kelas:**")
        proba_df = pd.DataFrame(
            prediction_proba,
            columns=[cluster_labels[i] for i in range(3)],
            index=['Probabilitas']
        )
        st.dataframe(proba_df.style.format("{:.2%}"))

        # ANALISIS LIME
        st.subheader("2. Analisis LIME (Mengapa Model Memilih Kelas Ini?)")
        with st.spinner('Menghasilkan penjelasan LIME...'):
            explanation = explainer.explain_instance(
                scaled_input[0],
                model.predict,
                num_features=len(X_train.columns)
            )
            fig = explanation.as_pyplot_figure()
            st.pyplot(fig, use_container_width=True)
            st.info("""
            **Cara Membaca Plot LIME:** Grafik batang **Hijau** adalah fitur yang mendukung prediksi ini, sedangkan **Merah** berlawanan.
            """, icon="💡")

        # REKOMENDASI
        st.subheader("3. Rekomendasi Strategis untuk Peningkatan Kelas")

        info_rekomendasi = {
            "Omzet_Bulanan_Juta_Rp": {
                "satuan": "Juta Rp",
                "saran_naik": "Tingkatkan penjualan melalui promosi atau inovasi produk."
            },
            "Laba_Bersih_Bulanan_Juta_Rp": {
                "satuan": "Juta Rp",
                "saran_naik": "Evaluasi struktur biaya dan efisiensi usaha."
            },
            "Jumlah_Karyawan": {
                "satuan": "orang",
                "saran_naik": "Tambah SDM jika kapasitas produksi terbatas."
            },
            "Total_Aset_Juta_Rp": {
                "satuan": "Juta Rp",
                "saran_naik": "Investasi alat usaha atau sistem pendukung."
            },
            "Pencatatan_Keuangan_1_3": {
                "satuan": "",
                "saran_naik": "Gunakan sistem pencatatan yang lebih profesional."
            },
            "Tingkat_Digitalisasi_1_4": {
                "satuan": "",
                "saran_naik": "Tingkatkan adopsi digital seperti e-commerce atau website."
            }
        }

        def generate_recommendations(target_cluster_num, current_df):
            label = cluster_labels[target_cluster_num]
            target_centroid = centroids.loc[target_cluster_num]
            with st.expander(f"📈 Saran Naik ke Kelas: {label}"):
                for feature in X_train.columns:
                    current_val = current_df[feature].iloc[0]
                    target_val = target_centroid[feature]
                    gap = target_val - current_val
                    satuan = info_rekomendasi[feature]["satuan"]
                    if gap > 0.05:
                        saran = info_rekomendasi[feature]["saran_naik"]
                        st.markdown(f"**{feature.replace('_', ' ')}**")
                        st.markdown(f"&nbsp;&nbsp;&nbsp;↳ Saat ini: **{current_val:.2f} {satuan}** | Target: **~{target_val:.2f} {satuan}** (Perlu naik **{gap:.2f}**)") 
                        st.markdown(f"&nbsp;&nbsp;&nbsp;💡 *{saran}*")

        if predicted_cluster == low_cluster:
            generate_recommendations(mid_cluster, input_df)
            generate_recommendations(high_cluster, input_df)
        elif predicted_cluster == mid_cluster:
            generate_recommendations(high_cluster, input_df)
        else:
            st.success("🎉 Usaha_Mikro sudah di kelas tertinggi. Fokus: pertahankan & berinovasi.")
    else:
        st.error("Model atau data pendukung tidak dapat dimuat. Prediksi tidak dapat dilakukan.")

# ----------------- LOGOUT BUTTON ------------------
st.sidebar.markdown("---")
st.sidebar.markdown("## 🔒 Logout")

if st.sidebar.button("Keluar Aplikasi"):
    for key in list(st.session_state.keys()):
        del st.session_state[key]
    st.markdown("""
        <meta http-equiv="refresh" content="0; url=http://localhost:8080/" />
    """, unsafe_allow_html=True)
