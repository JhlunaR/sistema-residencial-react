import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Estilos globales (opcional)
import App from './App'; // Importa el componente principal App

// Crea el punto de entrada de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación
root.render(
  <React.StrictMode>
    <App /> {/* Componente raíz que manejará el login/calendario */}
  </React.StrictMode>
);