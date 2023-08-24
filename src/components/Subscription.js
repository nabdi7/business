import React, { useState } from 'react';
import './Subscription.css';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setAlertMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      setEmail('');
      setSubscriptionMessage('Thank you for subscribing!');
      setTimeout(() => {
        setSubscriptionMessage('');
      }, 2000);
    }
  };

  return (
    <div className="subscription">
      <h2>Stay in Touch</h2>
      <p>Subscribe to our newsletter to receive updates and exclusive offers.</p>
      <form onSubmit={handleSubmit} className="subscription-form">
        <div className="input-container">
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Add the required attribute
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
      {subscriptionMessage ? (
        <p className="subscription-message">
          <span className="subscription-success">{subscriptionMessage}</span>
        </p>
      ) : null}
      
    </div>
  );
};

export default Subscription;
