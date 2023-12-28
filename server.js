const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

app.get("/laftel", async (req, res) => {
  const result = await fetch("https://laftel.net/api/items/v1/hot/").then(
    (res) => res.json()
  );
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
