import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página

    // Validación básica
    if (!username || !password) {
      setError('Por favor, completa ambos campos.');
      return;
    }

    // Simulación de credenciales válidas (en un caso real, aquí iría una llamada a una API)
    if (username === 'admin' && password === '1234') {
      setError('');
      setIsLoggedIn(true);
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      {!isLoggedIn ? (
        <>
          <h1>Iniciar Sesión</h1>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ padding: '8px' }}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '8px' }}
            />
            <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
              Ingresar
            </button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      ) : (
        <>
          <h1>¡Bienvenido, {username}!</h1>
          <button onClick={handleLogout} style={{ padding: '10px', backgroundColor: '#f44336', color: 'white', border: 'none' }}>
            Cerrar Sesión
          </button>
        </>
      )}
    </div>
  );
}

export default App;
