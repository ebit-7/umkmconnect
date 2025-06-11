import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Profile() {
  const navigate = useNavigate();

  const role = localStorage.getItem('role');
  const roleColors = {
    umkm: '#0d6efd',
    perbankan: '#198754',
    default: '#6c757d'
  };
  const headerColor = roleColors[role] || roleColors.default;

  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    accountStatus: '',
    memberSince: ''
  });
  const [lastLogin, setLastLogin] = useState('');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      setUser({
        username: localStorage.getItem('username') || 'Tidak diketahui',
        email: localStorage.getItem('email') || 'tidak_diketahui@example.com',
        phone: localStorage.getItem('phone') || '-',
        accountStatus: localStorage.getItem('accountStatus') || 'Aktif',
        memberSince: localStorage.getItem('memberSince') || new Date().toLocaleDateString()
      });
      setLastLogin(new Date().toLocaleString());
    }
  }, [navigate]);

  const infoList = [
    { label: 'Username', value: user.username, icon: 'bi-person-fill' },
    { label: 'Email', value: user.email, icon: 'bi-envelope-fill' },
    { label: 'Nomor Telepon', value: user.phone, icon: 'bi-telephone-fill' },
    {
      label: 'Status Akun',
      value: user.accountStatus,
      icon: 'bi-shield-lock-fill',
      className: user.accountStatus.toLowerCase() === 'aktif' ? 'text-success' : 'text-danger'
    },
    { label: 'Terakhir Login', value: lastLogin, icon: 'bi-clock-fill' },
    { label: 'Member Sejak', value: user.memberSince, icon: 'bi-calendar-event-fill' }
  ];

  const getInitials = name => (name ? name.charAt(0).toUpperCase() : '?');

  return (
    <Layout>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

              {/* Card Header */}
              <div
                className="card-header py-3 px-4"
                style={{ backgroundColor: headerColor, color: 'white' }}
              >
                <h5 className="mb-0 fw-semibold">
                  <i className="bi bi-person-circle me-2"></i>Profil Pengguna
                </h5>
              </div>

              {/* Avatar + Username + Email */}
              <div className="bg-light py-4 px-4 text-center border-bottom">
                <div
                  className="mx-auto mb-2"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: '#dee2e6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#495057'
                  }}
                >
                  {getInitials(user.username)}
                </div>
                <h5 className="mb-1 fw-semibold text-dark">{user.username}</h5>
                <small className="text-muted">{user.email}</small>
              </div>

              {/* Info Section */}
              <div className="card-body bg-white px-4 py-4">
                <div
                  className="border rounded-3 p-3 bg-light"
                  style={{ minHeight: 'auto' }}
                >
                  {infoList.map((item, index) => (
                    <div
                      key={index}
                      className="py-2 border-bottom d-flex align-items-center"
                      style={{ borderColor: '#ddd' }}
                    >
                      <i
                        className={`bi ${item.icon} me-2 text-muted`}
                        style={{ minWidth: '20px' }}
                      ></i>
                      <span className="text-muted fw-semibold me-1">{item.label}:</span>
                      <span className={`fw-semibold ${item.className || 'text-dark'}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tombol Edit */}
                <div className="text-center mt-4">
                  <Link
                    to="/edit-profile"
                    className="btn btn-dark rounded-pill px-4 py-2"
                  >
                    <i className="bi bi-pencil me-2"></i>Edit Profil
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
