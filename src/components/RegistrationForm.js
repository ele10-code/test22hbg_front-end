import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

// Componente per la registrazione di un nuovo utente tramite un form
const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Crea un'istanza di navigate

  // Funzione per inviare i dati del form al server per la registrazione
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset dell'errore precedente

    // Qui inserisci l'endpoint effettivo del tuo server API per la registrazione
    const API_ENDPOINT = `${process.env.REACT_APP_API_URL}`;

    try {
      // Invio dei dati al server
      const response = await axios.post(`${API_ENDPOINT}`, { email, password });

      // Gestisci la risposta come necessario
      // Ad esempio, potresti voler salvare il token di autenticazione:
      console.log(response); // Aggiungi questo per vedere la risposta nel console.log
      localStorage.setItem('token', response.data.token); // Simulazione di salvataggio token

      // Redirect verso la dashboard, home page, o altro
      //window.location.href = '/dashboard';
      
      // Dopo un successo nella registrazione:
      localStorage.setItem('token', response.data.token);
      navigate('/video'); // Usa navigate per reindirizzare l'utente alla pagina video

    } catch (err) {
      // Gestione degli errori, ad esempio errori di validazione o di connessione
      if (err.response) {
        // Gli errori rispondono con una risposta dal server
        setError(err.response.data.message);
      } else if (err.request) {
        // La richiesta è stata inviata ma non si è ricevuta risposta dal server (es. timeout)
        setError('Nessuna risposta dal server.');
      } else {
        // Qualcosa è andato storto nella configurazione della richiesta
        setError('Errore nella richiesta di registrazione.');
      }
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registrazione</h2>
      <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-submit">Registrati</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
