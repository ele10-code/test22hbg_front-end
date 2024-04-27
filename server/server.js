const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware per analizzare il corpo delle richieste POST in formato JSON
app.use(bodyParser.json());

// Endpoint per la registrazione degli utenti
app.post('/', async (req, res) => {
  const { email, password } = req.body;
  
  // Qui inseriresti la logica per salvare il nuovo utente nel database.
  // Per esempio, verificare che l'email non sia già in uso e criptare la password.

  // Restituire una risposta al client.
  res.status(201).send({ message: 'Utente creato con successo' });
});

// Impostare la porta e avviare il server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server in esecuzione su porta ${PORT}`));
