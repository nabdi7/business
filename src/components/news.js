import React, { useState, useEffect } from 'react';
// import './Subscription.css';
// import { db, firebaseApp } from '../firebase'; 

function Subscription() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    setMessage("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      db.collection('emails').add({
        email: input,
        // time: firebaseApp.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log('Email added to Firebase');
        setInput("");
        setMessage("Thank you for subscribing!");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      })
      .catch((error) => {
        console.error('Error adding email to Firebase:', error);
      });
    } else {
      setMessage("Please enter your email address.");
    }
  };

//   useEffect(() => {
   
//     firebaseApp.auth().onAuthStateChanged(() => {
     
//     });
//   }, []);

  return (
    <div className="subscription">
      <h2>Stay in Touch</h2>
      <p>Subscribe to our newsletter to receive updates and exclusive offers.</p>
      <form onSubmit={submitHandler}>
        <input type="email" onChange={inputHandler} value={input} />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="alert-message">{message}</p>}
    </div>
  );
}

export default Subscription;
