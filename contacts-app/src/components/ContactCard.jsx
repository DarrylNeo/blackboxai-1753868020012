import React from 'react';
import './ContactCard.css';

function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <div className="contact-header">
        <div className="contact-avatar">
          {contact.name.charAt(0).toUpperCase()}
        </div>
        <div className="contact-basic-info">
          <h3 className="contact-name">{contact.name}</h3>
          <p className="contact-username">@{contact.username}</p>
        </div>
      </div>
      
      <div className="contact-details">
        <div className="contact-info-item">
          <span className="info-label">Email:</span>
          <span className="info-value">{contact.email}</span>
        </div>
        
        <div className="contact-info-item">
          <span className="info-label">Phone:</span>
          <span className="info-value">{contact.phone}</span>
        </div>
        
        <div className="contact-info-item">
          <span className="info-label">Website:</span>
          <span className="info-value">{contact.website}</span>
        </div>
        
        <div className="contact-info-item">
          <span className="info-label">Company:</span>
          <span className="info-value">{contact.company.name}</span>
        </div>
        
        <div className="contact-info-item">
          <span className="info-label">Address:</span>
          <span className="info-value">
            {contact.address.street}, {contact.address.suite}, {contact.address.city}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
