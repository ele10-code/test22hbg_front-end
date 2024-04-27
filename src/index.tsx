import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { store } from './app/store';


// Ottieni il riferimento all'elemento root nel DOM 
const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

// Crea un root React per renderizzare l'applicazione all'interno del container specificato 
const root = createRoot(container);
 
// Renderizza l'applicazione all'interno del root React
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Auth0Provider
        domain="dev-elena.us.auth0.com"
        clientId="givYHnDVmSZ0MN6SVGIWPJAKfV9i6hwE"
        //skipRedirectCallback={window.location.pathname === '/stripe-oauth-callback'}
        onRedirectCallback={appState => {
          console.log('Auth0 login successful', appState);
        }}
      >
        <App />
      </Auth0Provider>
    </ReduxProvider>
  </React.StrictMode>
);
