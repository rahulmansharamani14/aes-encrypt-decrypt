const express = require("express");
const router = express.Router();

const TravisAes = require("../script/aes");

let aes = new TravisAes();

require("dotenv").config();

router.get("/", (req, res) => {
  res.send("Home Page");
});

router.post("/encrypt", (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);

  // const encryptedText = method.encrypt(text);
  let encryptedText = aes.encrypt(process.env.APP_SECRET, title);
  let encryptedDescription = aes.encrypt(process.env.APP_SECRET, description);

  res.json({
    encryptedText,
    encryptedDescription,
  });
});

router.post("/decrypt", (req, res) => {
  const { encryptedText, encryptedDescription } = req.body;
  console.log(req.body);

  // const encryptedText = method.encrypt(text);
  let decryptedText = aes.decrypt(process.env.APP_SECRET, encryptedText);
  let decryptedDescription = aes.decrypt(process.env.APP_SECRET, encryptedDescription);

  res.json({
    decryptedText,
    decryptedDescription,
  });
});

module.exports = router;
