const PORT = 8000;
const express = require("express");
const app = express();

app.get("/success", async (req, res) => {
  res.send("Success!");
});

app.get("/", async (req, res) => {
  res.send("Nothing here");
});

app.listen(PORT, () => console.log("Server running on Port " + PORT));
