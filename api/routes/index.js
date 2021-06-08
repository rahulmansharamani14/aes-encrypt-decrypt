const express = require("express");
const router = express.Router();
require("dotenv").config();

const Aes = require("../script/aes");
let aes = new Aes();

router.post("/encrypt", (req, res) => {
  const { text } = req.body;
  console.log(req.body);

  let encryptedText = aes.encrypt(process.env.APP_SECRET, text);

  res.json({
    encryptedText,
  });
});

router.post("/decrypt", (req, res) => {
  const { encryptedText } = req.body;
  console.log(req.body);

  let decryptedText = aes.decrypt(process.env.APP_SECRET, encryptedText);

  res.json({
    decryptedText,
  });
});

module.exports = router;
