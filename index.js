const fetch = require('node-fetch');

async function makeRequest() {
    const url = 'https://api.disneyapi.dev/characters';
    const response = await fetch(url);
    const disneyData = await response.json();
    console.log(disneyData);
}
makeRequest();