import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

// Definizione delle interfacce per le stazioni radio e gli stream
interface Stream {
  id: number;
  url: string;
  is_online: boolean;
}

interface RadioStation {
  id: string;
  name: string;
  slogan: string;
  logo: string;
  website?: string;
  streams: Stream[];
}

interface SearchComponentProps {
  onStreamSelect: (url: string) => void; // Aggiunta di una prop per la callback
}

// Componente SearchComponent con la prop onStreamSelect
const SearchComponent: React.FC<SearchComponentProps> = ({ onStreamSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<RadioStation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Funzione per effettuare la ricerca delle stazioni radio
  const fetchRadioStations = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://connect.fm-world.com/client2/radios', {
        params: { query, limit: 25 },
        headers: {
          Authorization: 'Bearer HSf2Zppryj4kXk6UMw3xvGYbmKKVfN3ACu17ycRsEwGp'
        }
      });
      if (response.data && Array.isArray(response.data.items)) {
        setResults(response.data.items);
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

  // Gestore per selezionare uno stream
  const handleStreamSelect = (url: string) => {
    onStreamSelect(url); // Chiama la callback con l'URL selezionato
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
          {results.map(radio => (
            <li key={radio.id} className="radio-list-item">
              <img src={radio.logo} alt={radio.name} style={{ width: '50px', height: '50px' }} />
              <strong>{radio.name}</strong> - {radio.slogan}
              {radio.streams.map(stream => (
                <button key={stream.id} onClick={() => handleStreamSelect(stream.url)}>
                  Play Stream
                </button>
              ))}
              <div>Website: <a href={radio.website} target="_blank" rel="noopener noreferrer">{radio.website}</a></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
