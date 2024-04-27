#!/bin/bash

# Avvia ngrok in background e ottieni l'URL
ngrok http 80 > /dev/null &
sleep 10 # aspetta che ngrok sia completamente avviato
NGROK_URL=$(curl -s http://127.0.0.1:4040/api/tunnels | jq --raw-output '.tunnels[0].public_url')

# Aggiorna il file .env
echo "REACT_APP_API_URL=$NGROK_URL" > .env

# Utilizza l'API di gestione di Auth0 per aggiornare le impostazioni della tua applicazione
# Sostituisci `YOUR_AUTH0_MANAGEMENT_API_TOKEN` con il tuo token effettivo
# Sostituisci `YOUR_AUTH0_CLIENT_ID` con l'ID del client della tua applicazione Auth0
curl -X PATCH https://dev-elena.us.auth0.com/api/v2/clients/u9GF8brwqxyI3LTmAUjvezumzGacUukv\
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImhjSFpjLXluY0NiZVdpY1I4ZlN6dSJ9.eyJpc3MiOiJodHRwczovL2Rldi1lbGVuYS51cy5hdXRoMC5jb20vIiwic3ViIjoiZ2l2WUhuRFZtU1owTU42U1ZHSVdQSkFLZlY5aTZod0VAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LWVsZW5hLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNzE0MjQ1ODY5LCJleHAiOjE3MTQzMzIyNjksInNjb3BlIjoicmVhZDpjbGllbnRfY3JlZGVudGlhbHMgdXBkYXRlOmNsaWVudF9jcmVkZW50aWFscyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsImF6cCI6ImdpdllIbkRWbVNaME1ONlNWR0lXUEpBS2ZWOWk2aHdFIn0.IgathvOj8-0AJfwC0SaXt0IOmFR0M8Q79wLxNVzqGWdlfGzuBKHdVu1vz5V0zPh5NdDmaPy12Ct9AuT5WNg6mHLA4Y4cHdgkun1DL7XIVqCiUe_oBS7GGwUCHSl5TV1inPA7KueEeHWy1LyYHx8VaOWcBgb4G6UM9oVrng4HYzS4tttXcFmT0WA9OAKR18yW18MRZmoEOTEkem1T2BGyM0uNi4_1MIAHtKn7semd0jQTEVlo3WGlEORnmf91y3W0Ro1DaVsZGPniCf0Z3TqKljsXox4RR-VpDMzqVQ40O-veQyuRv2MziwWDAqzvBdis9A5cU40Bh82PP7s4Fb3fdg" \
     -d "{\"callbacks\": [\"$NGROK_URL/callback\"], \"allowed_logout_urls\": [\"$NGROK_URL/logout\"]}"

# Riavvia l'app React se necessario
# ...
