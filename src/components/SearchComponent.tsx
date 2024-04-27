import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';


// Definisco l'interfaccia per le stazioni radio  
interface RadioStation {
  id: string;
  name: string;
  slogan: string;
  logo: string;
  website?: string;
  streams: Stream[];
}

// Definisco l'interfaccia per lo stream delle stazioni radio
interface Stream {
  id: number;
  url: string;
  is_online: boolean;
}


// Definisco il componente SearchComponent per la ricerca delle stazioni radio
const SearchComponent = () => {
  const [query, setQuery] = useState(''); // Stato per la query di ricerca
  const [results, setResults] = useState<RadioStation[]>([]); // Stato per i risultati della ricerca
  const [isLoading, setIsLoading] = useState(false); // Stato per il caricamento dei dati

  // Funzione per effettuare la ricerca delle stazioni radio
  const fetchRadioStations = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://connect.fm-world.com/client2/radios', {
        params: { query: query, limit: 25 },
        headers: {
          Authorization: 'Bearer HSf2Zppryj4kXk6UMw3xvGYbmKKVfN3ACu17ycRsEwGp'
        }
      });
      console.log("API Response:", response.data); // Log della risposta completa
      
      // Controllo se la risposta contiene i dati delle stazioni radio
      if (response.data && Array.isArray(response.data.items)) { 
        setResults(response.data.items); // Imposta i risultati della ricerca
      } else {
        console.error('Nessuna stazione trovata o dati non validi');
        setResults([]);
      }
    } catch (error) {
      console.error(`Errore nella ricerca: ${error}`);
      setResults([]);
    }
    setIsLoading(false);
  };
  

  // Ritorno il componente SearchComponent con il form di ricerca e la lista delle stazioni radio
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
            <li key={radio.id} className="radio-list-item">
              <img src={radio.logo} alt={radio.name} style={{ width: '50px', height: '50px' }} />
              <strong>{radio.name}</strong> - {radio.slogan}
              <div>Website: <a href={radio.website} target="_blank" rel="noopener noreferrer">{radio.website}</a></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
}
export default SearchComponent;
