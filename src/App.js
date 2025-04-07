import React, { useState } from 'react';
import Login from './components/auth/Login';
import ResidentialCalendar from './components/calendar/Calendar';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn  ? (
        <ResidentialCalendar />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;