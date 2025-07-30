import React from 'react';
import ContactsList from './components/ContactsList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Contacts</h1>
        <p className="app-subtitle">Browse your contacts with ease</p>
      </header>
      <main>
        <ContactsList />
      </main>
    </div>
  );
}

export default App;
