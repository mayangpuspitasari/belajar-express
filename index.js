const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./connection');
const response = require('./response');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  response(200, 'ini data', 'ini message', res);
});

app.get('/mahasiswa', (req, res) => {
  response(200, 'mahasiswa gett list', res);
});

app.get('/mahasiswa/:nim', (req, res) => {
  const nim = req.params.nim;
  response(200, `Mahasiswa berdasarkan Nim : ${nim}`, res);
});

app.post('/mahasiswa', (req, res) => {
  response(200, 'Ini Postingan Saya', res);
});
app.put('/mahasiswa', (req, res) => {
  response(200, 'Ini Untuk Update Data', res);
});
app.delete('/mahasiswa', (req, res) => {
  response(200, 'ini Untuk Hapus Data', res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

