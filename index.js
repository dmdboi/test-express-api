const express = require("express");
const app = express();

app.get("/", res => {
  return res.json(["Homer", "Marge", "Bart", "Lisa", "Maggie"]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
