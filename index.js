const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  const character = process.env.CHARACTER;
  return res.json(["Homer", "Marge", "Bart", "Lisa", "Apu", character]);
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
