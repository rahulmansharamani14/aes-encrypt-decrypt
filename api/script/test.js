const { encrypt, decrypt } = require("./index");

const hash = encrypt("prakhar");
console.log(hash);

const text = decrypt("c6e55b7ca469e721a7ebbbc5510012fc");
console.log(text);
