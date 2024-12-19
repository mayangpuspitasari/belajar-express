const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./connection');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('mantap');
});

app.post('/mahasiswa.post', (req, res) => {
  res.send('Ini Postingan Saya');
});
app.put('/', (req, res) => {});
app.delete('/', (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

