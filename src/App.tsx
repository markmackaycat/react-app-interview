import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState('');

  // Fetch the message from the Express API
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="./android-chrome-192x192.png" alt="Checkatrade logo" height={60} />
        <h1>{message || 'Loading...'}</h1>
      </header>
    </div>
  );
}

export default App;
