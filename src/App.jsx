
import React from 'react';
import './App.css';
import QuoteGenerator from './QuoteGenerator';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2>Random Quote Generator</h2>
        <main>
        <QuoteGenerator />
      </main>
      </header>
      
    </div>
  );
}

export default App;
