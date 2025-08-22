import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client'; // ✅ correct import for React 18+
import App from './App';

// ✅ Create the root
const root = ReactDOM.createRoot(document.getElementById('root'));

// ✅ Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

