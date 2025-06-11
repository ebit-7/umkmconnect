import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';  // tambahkan useNavigate

function Navbar() {
  const username = localStorage.getItem('username') || 'Pengguna';
  const location = useLocation();
  const navigate = useNavigate();  // inisialisasi useNavigate

  const colors = {
    primary: '#0d6efd', // bootstrap primary blue
    light: '#cfe2ff',
  };

  // Render nav link hanya untuk UMKM
  const renderNavLinks = () => {
    const activeStyle = {
      color: colors.primary,
      fontWeight: '600',
    };

    return (
      <>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/dashboard-umkm"
            style={location.pathname === '/dashboard-umkm' ? activeStyle : { color: colors.primary }}
          >
            Dashboard UMKM
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/produk"
            style={location.pathname === '/produk' ? activeStyle : { color: colors.primary }}
          >
            Produk
          </Link>
        </li>
      </>
    );
  };

  // Fungsi logout menggunakan navigate tanpa reload
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');  // redirect ke landingpage tanpa reload
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: colors.light }}
    >
      <div className="container">
        <button
          className="btn d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#slideoutMenu"
          aria-controls="slideoutMenu"
          style={{ color: colors.primary }}
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse justify-content-between">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {renderNavLinks()}
          </ul>

          <form className="d-flex align-items-center" role="search" onSubmit={e => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                borderColor: colors.primary,
                color: colors.primary,
              }}
            />
            <button
              className="btn"
              type="submit"
              style={{
                backgroundColor: colors.primary,
                color: 'white',
              }}
            >
              Search
            </button>

            <div className="dropdown-hover ms-3">
              <button
                className="btn p-0 border-0 bg-transparent"
                type="button"
                aria-expanded="false"
                style={{ color: colors.primary, fontSize: '1.8rem' }}
              >
                <i className="bi bi-person-circle"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow">
                <li className="dropdown-item-text text-muted small">
                  Login sebagai:
                </li>
                <li className="dropdown-item-text fw-semibold">{username}</li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/profile"
                    style={{ 
                      color: colors.primary, 
                      fontWeight: '600', 
                      userSelect: 'none',
                      WebkitTapHighlightColor: 'transparent' 
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    <i className="bi bi-person-circle me-2"></i>Lihat Profil
                  </Link>
                </li>
                <li>
                  <button
                    className="dropdown-item text-danger fw-semibold"
                    onClick={handleLogout}  // pakai fungsi handleLogout
                    onMouseDown={(e) => e.preventDefault()}
                    style={{ userSelect: 'none', WebkitTapHighlightColor: 'transparent' }}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>Logout
                  </button>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
