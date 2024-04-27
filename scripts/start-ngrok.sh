#!/bin/bash
echo "Avvio di ngrok..."
ngrok http 3000 > /dev/null &

echo "Attesa per l'URL di ngrok..."
sleep 1
NGROK_URL=$(curl --silent http://127.0.0.1:4040/api/tunnels | jq --raw-output '.tunnels[0].public_url')
echo "REACT_APP_API_URL=$NGROK_URL" > ./.env

echo "URL ngrok aggiornato in .env: $NGROK_URL"
