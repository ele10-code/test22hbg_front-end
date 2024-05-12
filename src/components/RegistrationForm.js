import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../App.css';

// Componente per la registrazione di un utente tramite un form 
const RegistrationForm = () => {
  const [userDetails, setUserDetails] = useState({ // Inizializza lo stato con i dettagli dell'utente
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null); // Inizializza lo stato per gli errori
  const navigate = useNavigate(); // Hook per la navigazione tra le pagine
  const { login } = useAuth();  // Utilizza login per aggiornare lo stato di autenticazione
  const handleChange = (e) => { // Funzione per gestire i cambiamenti nei campi del form 
    const { name, value } = e.target; // Estrai il nome e il valore dall'evento
    setUserDetails(prevDetails => ({ // Aggiorna lo stato con i nuovi dettagli
      ...prevDetails, 
      [name]: value
    }));
  };
  // Verifica se i campi del form sono validi per la registrazione
  const canSubmit = 
    userDetails.password === userDetails.confirmPassword &&
    userDetails.email &&
    userDetails.password &&
    userDetails.firstName &&
    userDetails.lastName;

    // Funzione per inviare i dati del form al server per la registrazione
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("Attempting to submit:", userDetails);
      setError(null);
      if (canSubmit) {
        console.log("Form is valid, submitting...");
        setTimeout(() => {
          // Simula la generazione di un token e il salvataggio in localStorage
          const simulatedToken = "simulated_token_" + Date.now();
          localStorage.setItem('token', simulatedToken);
          console.log("Registration successful, token:", simulatedToken);
  
          // Logga l'utente
          login();  // Aggiorna lo stato di autenticazione nel contesto
  
          // Naviga alla pagina video o dashboard
          console.log("Navigating to /video");
          navigate('/video');
        }, 1000);  // Simula un ritardo di rete
      } else {
        setError('Please verify that the fields are correct.');
      }
    };
    
    

  return (
    <div className="form-container">
      <h2 className="form-title">Crea il tuo Account</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-field">
          <label htmlFor="firstName" className="form-label">Nome:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastName" className="form-label">Cognome:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="confirmPassword" className="form-label">Conferma Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={userDetails.confirmPassword}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-submit" disabled={!canSubmit}>Registrati</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
