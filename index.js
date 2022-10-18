const express = require("express");
const cors = require("cors");
const path = require('path');
const { solver, getAnagrams } = require("./controller");

const app = express();

app.use(express.json());
app.use(cors());

//Middleware

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"))
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "stylesheet.css"));
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "main.js"));
});

app.get("/api/anagrams", getAnagrams)
app.post("/api/solver", solver);

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`));