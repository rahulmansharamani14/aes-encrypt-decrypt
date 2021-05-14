const crypto = require("crypto");

const algorithm = "aes-256-ctr"; //algorithm name
const secretKey = "12345678912345678912345678912345"; //secret key
const iv = crypto.randomBytes(16); //random bytes

//encrypt function
const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString("hex"),
    content: encrypted.toString("hex"),
  };
};

//decrypt function
const decrypt = (hash) => {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, "hex"));

  const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, "hex")), decipher.final()]);

  return decrpyted.toString();
};

module.exports = {
  encrypt,
  decrypt,
};
