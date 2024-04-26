import React, { useState } from 'react';
import axios from 'axios';
import './SearchComponents.css';

// Definisco l'interfaccia per le stazioni radio  
interface RadioStation {
  id: string;
  name: string;
  description: string;
}

// Definisco il componente SearchComponent per la ricerca delle stazioni radio
const SearchComponent = () => {
  const [query, setQuery] = useState(''); // Stato per la query di ricerca
  const [results, setResults] = useState<RadioStation[]>([]); // Stato per i risultati della ricerca
  const [isLoading, setIsLoading] = useState(false); // Stato per il caricamento dei dati

  // Funzione per effettuare la ricerca delle stazioni radio
  const fetchRadioStations = async () => {
    setIsLoading(true); // Imposto lo stato di caricamento a true
    try {
      const response = await axios.get(`https://connect.fm-world.com/client2//radios`, { // Effettuo una richiesta GET all'API delle stazioni radio
        params: { query: query, limit: 25 }, // Passo i parametri della query di ricerca e il limite di risultati
        headers: {
          Authorization: 'Bearer HSf2Zppryj4kXk6UMw3xvGYbmKKVfN3ACu17ycRsEwGp' 
        }
      });
      setResults(response.data.stations); // Imposto i risultati della ricerca con i dati ricevuti dalla risposta
    } catch (error) {
      console.error('Errore nella ricerca: ${error}'); // Stampo un messaggio di errore nella console
      setResults([]); // Azzero i risultati della ricerca in caso di errore
    }
    setIsLoading(false); // Imposto lo stato di caricamento a false
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca Radio"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={fetchRadioStations} disabled={isLoading} className="search-button">
        {isLoading ? 'Caricamento...' : 'Cerca'}
      </button>
      {results.length > 0 && (
        <ul>
          {results.map((radio) => (
            <li key={radio.id} className="radio-list-item">{radio.name} - {radio.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
