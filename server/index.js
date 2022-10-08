const express = require("express");
const cors = require("cors");
const { solver, getAnagrams } = require("./controller");

const app = express();

app.use(express.json());
app.use(cors());

//Middleware

app.get("/api/anagrams", getAnagrams)
app.post("/api/solver", solver);

app.listen(4004, () => console.log("Listening on port 4004"));