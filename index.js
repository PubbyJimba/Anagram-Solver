const express = require("express");
const cors = require("cors");
const path = require('path');
const { solver, getAnagrams } = require("./controller");

const app = express();

app.use(express.json());
app.use(cors());

//Middleware

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "Client", "index.html"))
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, "Client", "stylesheet.css"));
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, "Client", "main.js"));
});

app.get("/api/anagrams", getAnagrams)
app.post("/api/solver", solver);

app.listen(4004, () => console.log("Listening on port 4004"));