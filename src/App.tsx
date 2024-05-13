import React, {useState} from 'react';
import { BrowserRouter, Routes, Route,Link , useLocation} from 'react-router-dom';
import VideoPlayer from './components/VideoPlayer';
import SearchComponent from './components/SearchComponent';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import LiveStreamPage from './pages/LiveStreamPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <MainContent />
          <Routes>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/video" element={<ProtectedVideo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

function MainContent() {
  const location = useLocation();
  // Renderizza il contenuto introduttivo solo se l'utente è sulla homepage
  if (location.pathname === '/') {
    return (
      <>
        <h1>Benvenuto nell'App di live-streaming audio e video</h1>
        <p>Questa applicazione permette di guardare e cercare stazioni radio in streaming. Puoi accedere o creare un nuovo account per iniziare.</p>
        <div className="navigation-links">
          <Link to="/login" className="nav-link">Accedi</Link>
          <Link to="/register" className="nav-link">Registrati</Link>
        </div>
      </>
    );
  }
  return null; // Non mostra nulla per altri percorsi
}

export default App;

function ProtectedVideo() {
  const [selectedRadioUrl, setSelectedRadioUrl] = useState('');
  const { isLoggedIn } = useAuth(); // Usa il contesto di autenticazione qui, dentro un componente figlio

  const handleRadioSelect = (url: string) => {
    setSelectedRadioUrl(url);
  };

  if (!isLoggedIn) { // Se l'utente non è loggato, mostra un messaggio di errore
    return <div>Please login to view this content.</div>;
  }

  return (
    <div className="video-page-container">
      <div className="search-box">
        <h2 className="search-box-title">Cerca Radio</h2>
        <SearchComponent onStreamSelect={handleRadioSelect} />
      </div>
      {selectedRadioUrl && (
        <div className="radio-player-container">
          <VideoPlayer url={selectedRadioUrl} />
        </div>
      )}
    </div>
  );
}
