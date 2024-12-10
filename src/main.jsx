import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // Assuming you have a JSX file for your App component
import './index.css';         // Assuming you have CSS for styling

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);