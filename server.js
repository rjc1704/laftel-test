const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

app.get("/laftel", async (req, res) => {
  //   const result = await axios
  //     .get("https://laftel.net/api/items/v1/hot/")
  //     .then((res) => res.data);
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then((response) => response.json());
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
