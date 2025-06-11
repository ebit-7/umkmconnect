# import streamlit as st
# from streamlit.components.v1 import html

# # Hapus padding default dari Streamlit
# st.set_page_config(layout="wide")  # Gunakan layout penuh

# # Navbar
# html("""
# <style>
#   .custom-nav {
#     background-color: #1e3c72;
#     padding: 15px;
#     color: white;
#     font-weight: bold;
#   }
#   .custom-nav a {
#     color: white;
#     margin-right: 20px;
#     text-decoration: none;
#   }
#   .custom-footer {
#     position: fixed;
#     bottom: 0;
#     left: 0;
#     width: 100%;
#     background-color: #1e3c72;
#     color: white;
#     padding: 10px;
#     text-align: center;
#     z-index: 1000;
#   }
#   /* Hapus margin/padding body streamlit */
#   .block-container {
#     padding-top: 0rem !important;
#     padding-bottom: 4rem !important;
#   }
# </style>

# <div class="custom-nav">
#   <a href="/">🏠 Dashboard</a>
#   <a href="/profile">👤 Profil</a>
#   <a href="/logout">🚪 Logout</a>
# </div>
# """, height=70)

# # Konten utama
# st.title("Dashboard UMKM")
# st.write("Selamat datang di halaman dashboard Streamlit.")

# # Footerpol.,html("""
# <div class="custom-footer">
#   © 2025 UMKMConnect. All rights reserved.
# </div>
# """, height=70)
