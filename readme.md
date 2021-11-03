# AES Encryption and Decryption

A API for implementation of AES based encryption and decryption in Nodejs using Crypto module.

## Installation

Clone the repo

```
  git clone https://github.com/rahulmansharamani14/aes-encrypt-decrypt.git
```

Install NPM packages

```
  npm install
```

Create an .env file and add your APP_SECRET to it

```
  APP_SECRET='your app secret comes here'
```

Start Development server

```
  npm run dev
```

## API Reference

### Encryption

```http
  POST /api/encrypt
```

| Body Parameter | Type     | Description             |
| :------------- | :------- | :---------------------- |
| `text`         | `string` | **Required**. Your text |

### Decryption

```http
  POST /api/decrypt
```

| Body Parameter  | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `encryptedText` | `string` | **Required**. Your decrypted text |

## License

[MIT](https://choosealicense.com/licenses/mit/)
