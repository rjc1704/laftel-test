const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/laftel", async (req, res) => {
  const result = await axios
    .get("https://laftel.net/api/items/v1/hot/")
    .then((res) => res.data);
  res.json(result);
  //   res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
