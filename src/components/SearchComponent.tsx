// src/components/SearchComponent.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setQuery, setResults, setLoading, setError } from '../features/searchSlice';

const SearchComponent = () => {
  const dispatch = useDispatch();
  const { query, results, isLoading, error } = useSelector((state: RootState) => state.search);
  const [localQuery, setLocalQuery] = useState(query);

  const handleSearch = async () => {
    dispatch(setLoading(true));
    dispatch(setQuery(localQuery));

    try {
      const response = await fetch(`API_URL?query=${encodeURIComponent(localQuery)}`);
      const data = await response.json();
      dispatch(setResults(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      } else {
        dispatch(setError(String(error)));
      }
    }
    

    dispatch(setLoading(false));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit" disabled={isLoading}>Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.title}</li> // Assuming results are objects with a 'title' property
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
