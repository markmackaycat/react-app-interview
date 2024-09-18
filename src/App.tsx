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
        <h1>{message || 'Loading...'}</h1>
      </header>
    </div>
  );
}

export default App;
