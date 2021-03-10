const express = require('express');
const ip = require('ip');
const app = express();

app.get('/', (req, res) => {
  res.send('AWS exercise의 A project 버전입니다. @' + ip.address());
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.get('/health', (req, res) => {
  res.status(200).send();
});
