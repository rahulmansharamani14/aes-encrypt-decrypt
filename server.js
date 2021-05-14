const express = require("express");
const app = express();

const bodyparser = require("body-parser");

let PORT = process.env.PORT || 3000;
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/api", require("./api/routes/index"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Listining on ${PORT}`);
});
