## Documentazione per l'Esecuzione Locale dell'Applicazione

### Requisiti Preliminari
Per eseguire l'applicazione localmente, assicurati di avere installato:
- [Node.js](https://nodejs.org/en/) (versione LTS consigliata)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/), che generalmente viene installato insieme a Node.js.

### Clonazione e Installazione delle Dipendenze
1. Clona il repository del progetto dal tuo sistema di versionamento (ad esempio, GitHub).
   ```bash
   git clone [URL del repository]
   cd [nome del progetto]
   ```
2. Installa le dipendenze del progetto utilizzando npm o yarn. Questo comando legge il file `package.json` e installa tutte le librerie necessarie.
   ```bash
   npm install
   # oppure se usi yarn
   yarn install
   ```

### Avvio dell'Applicazione
Dopo aver installato le dipendenze, puoi avviare l'applicazione in modalità di sviluppo.
```bash
npm start
# oppure
yarn start
```
Questo comando avvia un server di sviluppo e apre il browser all'indirizzo [http://localhost:3001](http://localhost:3001). L'applicazione sarà ora in esecuzione e pronta per essere utilizzata localmente.

### Tecnologie e Librerie Utilizzate
- **React**: Una libreria JavaScript per la costruzione di interfacce utente, utilizzata per gestire la vista e lo stato dell'applicazione.
- **axios**: Una libreria JavaScript per effettuare richieste HTTP da browser e Node.js, usata per comunicare con l'API pubblica.
- **react-router-dom**: Libreria per la gestione delle route in applicazioni web React, utilizzata per navigare tra le pagine senza ricaricare il browser.
- **Node.js**: Ambiente di esecuzione per JavaScript lato server, usato per gestire dipendenze e script di esecuzione dell'applicazione.

### Integrazione con l'API Pubblica
L'applicazione utilizza axios per effettuare chiamate all'API pubblica per ottenere dati sulle stazioni radio. Queste richieste sono autenticate tramite un token inserito negli header delle richieste HTTP. La risposta, tipicamente in formato JSON, viene poi processata e utilizzata per popolare l'interfaccia utente con informazioni sulle stazioni radio e i relativi stream.

### Implementazione del Player Audio/Video
Il player audio/video è implementato utilizzando il tag HTML5 `<audio>` o `<video>`. Questo permette una facile integrazione di funzionalità multimediali all'interno dell'applicazione web. Gli URL degli stream ottenuti dall'API vengono passati come sorgente a questi tag, consentendo agli utenti di riprodurre direttamente i contenuti media senza bisogno di ulteriori plugin o estensioni.

### Gestione Errori e Sicurezza
La gestione degli errori durante le chiamate API è essenziale per un'applicazione robusta. L'applicazione cattura e gestisce errori quali la mancata risposta dell'API o dati non validi, informando l'utente mediante messaggi di errore appropriati. Inoltre, le chiavi API e i token di autenticazione sono gestiti in modo sicuro per evitare esposizioni accidentali.

Questi passaggi dovrebbero fornirti una base solida per configurare e eseguire l'applicazione localmente, oltre a comprendere le tecnologie e le strategie implementative utilizzate.