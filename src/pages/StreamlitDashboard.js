// src/pages/StreamlitDashboard.js
import React from 'react';

const StreamlitDashboard = () => {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src="/streamlit"
        title="Streamlit Dashboard"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  );
};

export default StreamlitDashboard;
