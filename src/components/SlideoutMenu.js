// src/components/SlideoutMenu.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SlideoutMenu() {
  const username = localStorage.getItem('username') || 'Pengguna';
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');

  // Warna khusus UMKM
  const colors = {
    primary: '#1e3c72',
    background: '#f4f6fb',
    button: 'btn-primary',
  };

  const closeSlideout = () => {
    const offcanvasElement = document.getElementById('slideoutMenu');
    if (!offcanvasElement) return;

    let offcanvas = window.bootstrap?.Offcanvas.getInstance(offcanvasElement);
    if (!offcanvas && window.bootstrap?.Offcanvas) {
      offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
    }

    if (offcanvas) {
      offcanvas.hide();
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    const offcanvasElement = document.getElementById('slideoutMenu');
    if (offcanvasElement) {
      offcanvasElement.addEventListener(
        'hidden.bs.offcanvas',
        () => {
          navigate('/');
        },
        { once: true }
      );
    }
    closeSlideout();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    closeSlideout();
    if (searchKeyword.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchKeyword.trim())}`);
    } else {
      alert('Masukkan kata kunci untuk pencarian.');
    }
  };

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="slideoutMenu"
      aria-labelledby="slideoutMenuLabel"
      style={{ backgroundColor: colors.background }}
    >
      <div className="offcanvas-header border-bottom">
        <h5
          className="offcanvas-title fw-bold"
          id="slideoutMenuLabel"
          style={{ color: colors.primary }}
        >
          <i className="bi bi-grid me-2"></i>Menu Navigasi
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body d-flex flex-column justify-content-between">
        <div>
          <ul className="nav flex-column">
            {/* Menu UMKM */}
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/dashboard-umkm"
                onClick={closeSlideout}
                style={{ color: colors.primary }}
              >
                <i className="bi bi-house-door-fill me-2"></i>Dashboard UMKM
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/produk"
                onClick={closeSlideout}
                style={{ color: colors.primary }}
              >
                <i className="bi bi-box-seam me-2"></i>Produk
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/profile"
                onClick={closeSlideout}
                style={{ color: colors.primary }}
              >
                <i className="bi bi-person-circle me-2"></i>Lihat Profil
              </Link>
            </li>
          </ul>

          <form className="mt-4" role="search" onSubmit={handleSearch}>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search text-secondary"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Cari sesuatu..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button className={`btn ${colors.button}`} type="submit">
                Cari
              </button>
            </div>
          </form>
        </div>

        <div className="mt-5 border-top pt-3">
          <p className="mb-1 text-muted small">Login sebagai:</p>
          <p className="fw-semibold mb-3" style={{ color: colors.primary }}>
            {username}
          </p>

          <button className="btn btn-outline-danger w-100" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right me-2"></i>Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideoutMenu;
