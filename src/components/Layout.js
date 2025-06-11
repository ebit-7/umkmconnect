// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import SlideoutMenu from './SlideoutMenu';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <SlideoutMenu />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
