const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json(["Homer", "Marge", "Bart", "Lisa", "Apu"]);
});

app.listen(5555, () => {
  console.log("Server running on port 5125");
});
