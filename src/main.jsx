import { AuthProvider } from './contexts/AuthContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);