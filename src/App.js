import React, { useState, useEffect } from 'react';
import Login from './components/auth/Login';
import ResidentialCalendar from './components/calendar/Calendar';
import PagosSimulados from './components/pago/Pagos';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mostrarPagos, setMostrarPagos] = useState(false);

  // Verificar autenticación al cargar
  useEffect(() => {
    const checkAuth = async () => {
      const savedAuth = localStorage.getItem('residentialAuth');
      if (savedAuth) {
        try {
          // Aquí podrías validar con tu backend
          setIsLoggedIn(true);
        } catch (error) {
          localStorage.removeItem('residentialAuth');
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const handleLogin = () => {
    localStorage.setItem('residentialAuth', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('residentialAuth');
    setIsLoggedIn(false);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Cargando sistema residencial...</p>
      </div>
    );
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <header className="app-header">
            <h1>Calendario Residencial</h1>
            <button onClick={handleLogout} className="logout-btn">
              Cerrar Sesión
            </button>
          </header>
          <ResidentialCalendar />
          <button
            onClick={() => setMostrarPagos(true)}
            style={{ margin: '20px' }}
            >
              Pagar Cuota Mensual
            </button>
            {mostrarPagos &&(
              <div className="modal">
                <PagosSimulados />
                <button onClick={() => setMostrarPagos(false)}>Cerrar</button>
              </div>
            )}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;