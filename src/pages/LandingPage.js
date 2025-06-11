import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/animations.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid"
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        color: '#000000',
        fontFamily: "'Poppins', sans-serif",
        padding: '40px 20px',
      }}
    >
      {/* Logo + Nama Aplikasi */}
      <div style={{ maxWidth: '1140px', margin: '0 auto' }} className="px-4">
        <div
          className="d-flex align-items-center mb-5"
          style={{ animation: 'fadeInDown 1s ease forwards' }}
        >
          <img src="/images/LOGOOOOiiiiii.png" alt="Logo" style={{ width: '60px', marginRight: '10px' }} />
          <h2 style={{ fontWeight: '700', fontSize: '2rem', margin: 0, color: '#000000' }}>UMKMConnect</h2>
        </div>
      </div>

      {/* Grid Tengah */}
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
        <div
          className="row w-100 justify-content-center align-items-stretch gx-5"
          style={{ maxWidth: '1140px' }}
        >
          {/* Kolom Kiri */}
          <div
            className="col-md-6 d-flex flex-column justify-content-center align-items-start px-4 mb-4 mb-md-0"
            style={{ animation: 'fadeInDown 1s ease forwards', minHeight: '400px' }}
          >
            <img
              src="/images/gambar_fiks.png"
              alt="Ilustrasi Aplikasi"
              style={{ maxWidth: '100%', borderRadius: '10px', marginBottom: '20px' }}
            />
            <p
              style={{
                fontSize: '1.1rem',
                textAlign: 'justify',
                color: '#000000',
              }}
            >
              <strong>UMKMConnect</strong> adalah platform digital yang mengklasifikasikan UMKM berdasarkan Omzet Bulanan, Laba Bersih, Jumlah Karyawan, Total Aset, Pencatatan Keuangan, dan Tingkat Digitalisasi. Dengan pendekatan ini, aplikasi mempermudah pemetaan UMKM, penyaluran pembiayaan, dan pengembangan usaha secara efisien dan tepat sasaran.
            </p>
          </div>

          {/* Kolom Kanan */}
          <div
            className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center px-4"
            style={{ animation: 'fadeInUp 1s ease forwards', minHeight: '400px' }}
          >
            <div className="d-grid gap-3 w-100" style={{ maxWidth: '360px' }}>
              <button
                className="custom-btn"
                onClick={() => navigate('/login-umkm')}
              >
                Login UMKM
              </button>

              <button
                className="custom-btn"
                onClick={() => navigate('/register')}
              >
                Daftar Akun Baru
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animasi dan Custom Button Style */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .custom-btn {
          background-color: #17a2b8; /* info color */
          color: #ffffff;
          border: 2px solid #17a2b8;
          font-weight: 600;
          font-size: 1.125rem;
          padding: 0.75rem 1.25rem;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: all 0.3s ease;
          user-select: none;
          width: 100%;
        }

        .custom-btn:hover {
          background-color: #138496; /* darker info */
          border-color: #138496;
          color: #ffffff;
          transform: scale(1.05);
        }

        .custom-btn:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);
        }
      `}</style>
    </div>
  );
}

export default LandingPage;
