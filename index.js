const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  const character = process.env.CHARACTER
  return res.json(["Homer", "Marge", "Bart", "Lisa", "Apu", character]);
});

app.listen(5555, () => {
  console.log("Server running on port 5555");
});
