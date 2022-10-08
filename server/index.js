const express = require("express");
const cors = require("cors");
const { solver } = require("./controller");

const app = express();

app.use(express.json());
app.use(cors());

//Middleware

app.post("/api/anagramsolver", solver);

app.listen(4004, () => console.log("Listening on port 4004"));