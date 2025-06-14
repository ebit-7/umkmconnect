# 💼 Si Mikro

**Si Mikro** adalah aplikasi cerdas berbasis machine learning yang dirancang untuk membantu pemetaan dan klasifikasi UMKM di Indonesia ke dalam tiga kategori utama:

- 📉 **Mikro Subsisten**
- ⚖️ **Mikro Berkembang**
- 📈 **Mikro Unggul**

Dengan dukungan visualisasi, rekomendasi, dan AI interpretatif (LIME), platform ini menjadi solusi digital untuk pelaku usaha dan lembaga pendukung dalam pengambilan keputusan strategis.

---

## 🎯 Tujuan Aplikasi

- Memberikan **klasifikasi otomatis** berdasarkan data usaha mikro
- Menyediakan **rekomendasi strategis** berbasis data agar UMKM bisa naik kelas
- Menjadi alat bantu visual untuk **pendampingan, pelatihan, atau penyaluran pembiayaan**

---

## 🧩 Fitur Utama

- 🧠 **Klasifikasi Machine Learning** dengan model clustering dan klasifikasi berbasis data usaha mikro
- 🔍 **Penjelasan Model (LIME)** untuk interpretabilitas hasil prediksi secara transparan
- 📈 **Rekomendasi Strategis** agar UMKM dapat meningkatkan performa dan naik kelas usaha
- 🎨 **UI Modern** berbasis React.js dan Bootstrap yang responsif dan mudah digunakan
- 🛡️ **Login/Register** sederhana dengan penyimpanan akun berbasis browser (localStorage)
- 🌐 **Integrasi Backend-Frontend** lancar menggunakan Streamlit API dan React sebagai frontend utama

---

## 🛠️ Teknologi yang Digunakan

| Komponen       | Teknologi                                                |
|----------------|----------------------------------------------------------|
| Backend        | Python, Streamlit, Scikit-learn (ML Models), LIME (AI Explainability) |
| Frontend       | React.js, Bootstrap                                       |
| Deployment     | VPS via IDCloudHost (Linux Ubuntu 22.04)                 |

**Catatan Machine Learning:**  
Model ML menggunakan teknik clustering untuk segmentasi UMKM dan klasifikasi supervised untuk menentukan kelas usaha (Subsisten, Berkembang, Unggul). Interpretasi hasil menggunakan LIME agar pengguna dapat memahami faktor apa saja yang mempengaruhi prediksi.

---

## 🚀 Cara Deploy di VPS IDCloudHost

1. **Pesan VPS Linux Ubuntu 22.04 di IDCloudHost**
2. **Update dan pasang dependensi**:
   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install python3-pip nodejs npm -y
   pip3 install -r requirements.txt
   npm install
