import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import './ContactsList.css';

function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch contacts.');
        }
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchContacts();
  }, []);

  if (loading) return <div className="status-message">Loading contacts...</div>;
  if (error) return <div className="status-message error">Error: {error}</div>;

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h2>All Contacts ({contacts.length})</h2>
      </div>
      <div className="contacts-list">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default ContactsList;
