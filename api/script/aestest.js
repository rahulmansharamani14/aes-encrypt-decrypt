const TravisAes = require("./aes");

let aes = new TravisAes();
let encrypted = aes.encrypt("secret", "This is plain text.");
let decrypted = aes.decrypt("secret", encrypted);
console.log("encrypted: " + encrypted);
console.log("decrypted: " + decrypted);
