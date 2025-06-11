import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function DashboardUMKM() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      alert('Anda belum login.');
      navigate('/login-umkm');
    }
  }, [navigate]);

  const [userData, setUserData] = useState(() => {
    const stored = localStorage.getItem('userData');
    return stored ? JSON.parse(stored) : {};
  });

  const [produkBaru, setProdukBaru] = useState({ nama: '', harga: '' });
  const produkList = userData.produk || [];

  const handleTambahProduk = (e) => {
    e.preventDefault();
    if (!produkBaru.nama || !produkBaru.harga || isNaN(produkBaru.harga)) {
      alert('Nama dan harga harus valid.');
      return;
    }

    const produkObj = {
      nama: produkBaru.nama,
      harga: parseInt(produkBaru.harga, 10),
    };

    const updatedProduk = [...produkList, produkObj];
    const updatedUserData = { ...userData, produk: updatedProduk };

    localStorage.setItem('userData', JSON.stringify(updatedUserData));
    setUserData(updatedUserData);
    setProdukBaru({ nama: '', harga: '' });
  };

  return (
    <Layout>
      <div className="container py-5">
        <div className="bg-light p-4 rounded shadow-sm">
          <h2 className="text-primary mb-4">Dashboard UMKM</h2>
          <p>Selamat datang, <strong>{userData.username || 'Pengguna'}</strong>!</p>

          {/* Profil Usaha */}
          <div className="card my-4">
            <div className="card-header bg-primary text-white">
              Profil Usaha
            </div>
            <div className="card-body">
              <p><strong>Nama Usaha:</strong> Toko ABC</p>
              <p><strong>Alamat:</strong> Jl. Contoh No. 123</p>
              <p><strong>Jenis Usaha:</strong> UMKM Retail</p>
              <p><strong>Email:</strong> {userData.email || 'email@contoh.com'}</p>
            </div>
          </div>

          {/* Daftar Produk */}
          <h4 className="mt-4">Produk</h4>
          {produkList.length === 0 ? (
            <p>Belum ada produk.</p>
          ) : (
            <ul className="list-group mb-4">
              {produkList.map((p, i) => (
                <li key={i} className="list-group-item">
                  {p.nama} - Rp{p.harga.toLocaleString('id-ID')}
                </li>
              ))}
            </ul>
          )}

          {/* Form Tambah Produk */}
          <form onSubmit={handleTambahProduk} className="mt-4">
            <h5>Tambah Produk Baru</h5>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nama Produk"
                value={produkBaru.nama}
                onChange={(e) => setProdukBaru({ ...produkBaru, nama: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Harga Produk"
                value={produkBaru.harga}
                onChange={(e) => setProdukBaru({ ...produkBaru, harga: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Tambah Produk
            </button>
          </form>

          {/* Streamlit Dashboard */}
          <div className="mt-5">
            <h4 className="text-primary">📊 Analisis & Rekomendasi Usaha (AI Dashboard)</h4>

            {/* Link alternatif buka di tab baru */}
            <p>
              Jika iframe kosong, buka dashboard Streamlit langsung di tab baru:{' '}
              <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer">
                Buka Dashboard Analisis Usaha (Streamlit)
              </a>
            </p>

            {/* iframe */}
            <iframe
              src="http://localhost:8501"
              width="100%"
              height="1000"
              style={{ border: '1px solid #ccc', borderRadius: '8px' }}
              title="Streamlit Dashboard"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardUMKM;
