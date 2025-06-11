// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">UMKMConnect</h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#ffffff", height: "2px" }} />
            
            <p className="text-light text-decoration-none me-2" style={{ textAlign: 'justify' }}>
              UMKMConnect adalah aplikasi digital yang dirancang untuk menghubungkan UMKM dan perbankan melalui proses klasifikasi berdasarkan wilayah dan kategori usaha. Aplikasi ini mendukung pemetaan data, penyaluran pembiayaan, serta pengembangan UMKM secara tepat dan efisien.
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">Navigasi</h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#ffffff", height: "2px" }} />
            <p><Link to="#" className="text-light text-decoration-none">Home</Link></p>
            <p><Link to="/profil" className="text-light text-decoration-none">Profil</Link></p>
            <p><a href="#" className="text-light text-decoration-none">Layanan</a></p>
            <p><a href="#" className="text-light text-decoration-none">Kontak</a></p>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">Kontak</h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#ffffff", height: "2px" }} />
            <p><a href="#" className="text-light text-decoration-none me-2"><i className="fas fa-home me-2"></i> Jakarta, Indonesia</a></p>
            <p><a href="#" className="text-light text-decoration-none me-2"><i className="fas fa-envelope me-2"></i> info@umkmconnect.com</a></p>
            <p><a href="#" className="text-light text-decoration-none me-2"><i className="fas fa-phone me-2"></i> +62 812 3456 7890</a></p>
          </div>
          <div className="col-md-3 mb-4 text-md-start text-center">
            <h6 className="text-uppercase fw-bold">Ikuti Kami</h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#ffffff", height: "2px" }} />
            <p><a href="#" className="text-light text-decoration-none me-2"><i className="fab fa-facebook-f"></i> Facebook</a></p>
            <p><a href="#" className="text-light text-decoration-none me-2"><i className="fab fa-twitter"></i> Twitter</a></p>
            <p><a href="#" className="text-light text-decoration-none me-2"><i className="fab fa-instagram"></i> Instagram</a></p>
            <p><a href="#" className="text-light text-decoration-none me-2"><i className="fab fa-linkedin-in"></i> LinkedIn</a></p>
          </div>
        </div>
        <hr className="my-4" style={{ backgroundColor: "#ffffff" }} />
        <div className="row text-center">
          <div className="col-12">
            <p className="mb-0 text-light text-decoration-none me-2" >© 2025 UMKMConnect. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
