import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function EditProfile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [accountStatus, setAccountStatus] = useState('');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/'); // Redirect ke landing page kalau belum login
    } else {
      setUsername(localStorage.getItem('username') || '');
      setEmail(localStorage.getItem('email') || '');
      setPhone(localStorage.getItem('phone') || '');
      setAccountStatus(localStorage.getItem('accountStatus') || 'Aktif');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('accountStatus', accountStatus);
    navigate('/profile');
  };

  return (
    <Layout>
      <div className="container mt-5">
        <div className="card shadow rounded-4 border-0">
          <div className="card-header bg-dark text-white">
            <h4><i className="bi bi-pencil-square me-2"></i>Edit Profil</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* Username (tidak bisa diubah) */}
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  disabled
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Nomor Telepon */}
              <div className="mb-3">
                <label className="form-label">Nomor Telepon</label>
                <input
                  type="text"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Status Akun */}
              <div className="mb-3">
                <label className="form-label">Status Akun</label>
                <select
                  className="form-select"
                  value={accountStatus}
                  onChange={(e) => setAccountStatus(e.target.value)}
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Nonaktif">Nonaktif</option>
                </select>
              </div>

              {/* Tombol */}
              <button type="submit" className="btn btn-primary">
                Simpan Perubahan
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => navigate('/profile')}
              >
                Batal
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditProfile;
