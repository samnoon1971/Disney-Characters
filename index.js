const fetch = require('node-fetch');
const express = require("express");

const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use("./views", require("./controllers/ViewEngines"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan("dev"));
app.use( express.static( "public" ) );
app.use(express.static("docs"));
async function makeRequest() {
    const url = 'https://api.disneyapi.dev/characters';
    const response = await fetch(url);
    const disneyData = await response.json();
}
makeRequest().then(r =>     console.log(r));