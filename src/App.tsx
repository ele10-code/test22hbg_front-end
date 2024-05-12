// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import VideoPlayer from './components/VideoPlayer';
// import SearchComponent from './components/SearchComponent';
// import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import './App.css';

// function App() {
//   const [selectedRadioUrl, setSelectedRadioUrl] = useState<string>('');
//   const auth = useAuth(); // Usa il contesto di autenticazione

//   const handleRadioSelect = (url: string) => {
//     setSelectedRadioUrl(url);
//   };

//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <div className="App">
//           <h1>Benvenuto nell'App di live-streaming audio e video</h1>
//           <Routes>
//           <Route path="/register" element={<RegistrationForm />} />
//             <Route path="/login" element={<LoginForm />} />
//             <Route path="/video" element={
//             <div className="video-page-container">
//               <div className="search-box">
//                 <h2 className="search-box-title">Cerca Radio</h2>
//                 <SearchComponent onStreamSelect={handleRadioSelect} />
//               </div>
//               {selectedRadioUrl && (
//                 <div className="radio-player-container">
//                   <VideoPlayer url={selectedRadioUrl} /> {/* Player per la radio selezionata */}
//                 </div>
//               )}
//             </div>
//           } />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   </AuthProvider>
    
//   );
// }

// export default App;


import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPlayer from './components/VideoPlayer';
import SearchComponent from './components/SearchComponent';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <h1>Benvenuto nell'App di live-streaming audio e video</h1>
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
