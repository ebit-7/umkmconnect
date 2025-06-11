# dashboard.py

import streamlit as st
import pandas as pd
import joblib
import numpy as np
import lime
import lime.lime_tabular
import matplotlib.pyplot as plt

# ----------------- PAGE CONFIG ------------------
st.set_page_config(
    page_title="UMKMConnect",
    page_icon="LOGOjadi.png",  # Ganti dengan "logo.png" jika ingin favicon custom
    layout="centered",
    initial_sidebar_state="expanded"
)

# ----------------- LOGO DAN JUDUL ------------------
# st.image("LOGOjadi.png", width=120)  # Ganti dengan path logo Anda
st.markdown("<h1 style='margin-bottom: 0;'>Dashboard Simulasi Usaha Mikro</h1>", unsafe_allow_html=True)
st.markdown("<small>Prediksi kelas dan rekomendasi strategis untuk UMKM</small>", unsafe_allow_html=True)
st.markdown("---")

# ----------------- LOAD MODEL DAN DATA ------------------
@st.cache_resource
def load_model_and_data():
    try:
        model = joblib.load('model_terbaik_capstone.joblib')
        X_train = pd.read_csv('X_train_lime.csv')

        train_clusters = model.predict(X_train)
        X_train_with_clusters = X_train.copy()
        X_train_with_clusters['Cluster'] = train_clusters
        centroids = X_train_with_clusters.groupby('Cluster').mean(numeric_only=True)

        explainer = lime.lime_tabular.LimeTabularExplainer(
            training_data=X_train.values,
            feature_names=X_train.columns.tolist(),
            class_names=['Mikro Berkembang', 'Mikro Unggul', 'Mikro Subsisten'],
            mode='classification'
        )

        return model, explainer, X_train, centroids

    except FileNotFoundError as e:
        st.error(f"File tidak ditemukan: {e.filename}")
        return None, None, None, None
    except Exception as e:
        st.error(f"Terjadi error saat memuat data: {e}")
        return None, None, None, None

# ----------------- INPUT USER ------------------
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
model, explainer, X_train, centroids = load_model_and_data()

input_df = user_input_features()

st.subheader('Data Usaha_Mikro yang Disimulasikan:')
st.write(input_df)

if st.button('Jalankan Prediksi dan Analisis'):
    if all(v is not None for v in [model, explainer, X_train, centroids]):
        prediction = model.predict(input_df)
        prediction_proba = model.predict_proba(input_df)
        Usaha_Mikro_cluster = prediction[0]

        cluster_ranking = centroids.sort_values('Omzet_Bulanan_Juta_Rp').index.tolist()
        low_cluster, mid_cluster, high_cluster = cluster_ranking

        cluster_labels = {
            low_cluster: 'Mikro Subsisten',
            mid_cluster: 'Mikro Berkembang',
            high_cluster: 'Mikro Unggul'
        }

        nama_kelas_prediksi = cluster_labels[Usaha_Mikro_cluster]

        st.header('Hasil Analisis')
        st.subheader('1. Hasil Prediksi')
        st.success(f"Usaha_Mikro diprediksi masuk kelas: **{nama_kelas_prediksi}** (Cluster {Usaha_Mikro_cluster})")

        st.write("**Probabilitas prediksi:**")
        proba_df = pd.DataFrame(
            prediction_proba,
            columns=[cluster_labels.get(i, f"Cluster {i}") for i in model.classes_],
            index=['Probabilitas']
        )
        st.dataframe(proba_df.style.format("{:.2%}"))

        st.subheader("2. Analisis LIME (Alasan Model)")
        with st.spinner('Menghasilkan penjelasan...'):
            explanation = explainer.explain_instance(input_df.iloc[0].values, model.predict_proba, num_features=len(X_train.columns))
            fig = explanation.as_pyplot_figure()
            st.pyplot(fig, use_container_width=True)
            st.info("Hijau = mendukung prediksi | Merah = melawan prediksi", icon="💡")

        st.subheader("3. Rekomendasi Strategis")
        info_rekomendasi = {
            "Omzet_Bulanan_Juta_Rp": {"satuan": "juta Rp", "saran_naik": "Tingkatkan pemasaran dan digital marketing."},
            "Laba_Bersih_Bulanan_Juta_Rp": {"satuan": "juta Rp", "saran_naik": "Evaluasi biaya operasional."},
            "Jumlah_Karyawan": {"satuan": "orang", "saran_naik": "Pertimbangkan menambah karyawan."},
            "Total_Aset_Juta_Rp": {"satuan": "juta Rp", "saran_naik": "Investasi peralatan atau pengembangan usaha."},
            "Pencatatan_Keuangan_1_3": {"satuan": "skor 1–3", "saran_naik": "Gunakan software keuangan."},
            "Tingkat_Digitalisasi_1_4": {"satuan": "skor 1–4", "saran_naik": "Manfaatkan e-commerce dan digital tools."}
        }

        def generate_recommendations(target_cluster_num, current_df):
            target_centroid = centroids.loc[target_cluster_num]
            label = cluster_labels[target_cluster_num]

            with st.expander(f"📈 Saran naik ke: {label}"):
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

        if Usaha_Mikro_cluster == low_cluster:
            generate_recommendations(mid_cluster, input_df)
            generate_recommendations(high_cluster, input_df)
        elif Usaha_Mikro_cluster == mid_cluster:
            generate_recommendations(high_cluster, input_df)
        else:
            st.success("🎉 Usaha_Mikro sudah di kelas tertinggi. Fokus: pertahankan & berinovasi.")
    else:
        st.error("Model atau data tidak dimuat.")

        # ----------------- LOGOUT BUTTON ------------------
st.sidebar.markdown("---")
st.sidebar.markdown("## 🔒 Logout")

if st.sidebar.button("Keluar Aplikasi"):
    # Clear session state
    for key in list(st.session_state.keys()):
        del st.session_state[key]

    # Redirect ke halaman React
    st.markdown("""
        <meta http-equiv="refresh" content="0; url=http://localhost:8080/" />
    """, unsafe_allow_html=True)
