const Aes = require("./aes");

let aes = new Aes();
let encrypted = aes.encrypt("secret", "This is plain text.");
let decrypted = aes.decrypt("secret", encrypted);
console.log("encrypted text: " + encrypted);
console.log("decrypted text: " + decrypted);
