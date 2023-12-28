const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

app.get("/laftel", async (req, res) => {
  const result = await fetch("https://laftel.net/api/items/v1/hot/", {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  }).then((res) => res.json());
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
