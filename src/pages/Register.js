import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('user', username);
    localStorage.setItem('pass', password);
    localStorage.setItem('username', username);

    alert('Registrasi berhasil! Silakan login.');
    navigate('/login');
  };

  return (
    <div style={styles.page}>
      <div style={styles.card} className="register-card">
        <h2 style={styles.title}>📝 Daftar UMKM</h2>
        <form onSubmit={handleRegister} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Daftar
          </button>
        </form>
        <p style={styles.footer}>
          Sudah punya akun?{' '}
          <a href="/login" style={styles.link}>Masuk di sini</a>
        </p>

        {/* Responsive & placeholder style */}
        <style>{`
          input::placeholder {
            color: #888;
            opacity: 0.8;
          }

          @media (max-width: 480px) {
            .register-card {
              width: 90% !important;
              padding: 20px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

// 🎨 Gaya konsisten dengan LoginUMKM (clean & responsive)
const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f1f1f1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', 'Poppins', sans-serif",
    padding: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    color: '#333',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '6px',
    fontWeight: '500',
    color: '#333',
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    backgroundColor: '#fff',
    color: '#000',
    outline: 'none',
  },
  button: {
    padding: '12px',
    backgroundColor: '#17a2b8', // warna info
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.3s ease',
  },
  footer: {
    marginTop: '20px',
    fontSize: '0.9rem',
    textAlign: 'center',
    color: '#666',
  },
  link: {
    color: '#17a2b8',
    fontWeight: '600',
    textDecoration: 'none',
  },
};

export default Register;
