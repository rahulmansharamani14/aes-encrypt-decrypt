const express = require("express");
const app = express();

const bodyparser = require("body-parser");

let PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", require("./api/routes/index"));

app.listen(PORT, () => {
  console.log(`Listining on ${PORT}`);
});
