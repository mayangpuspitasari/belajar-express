const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./connection');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('mantap');
});
app.get('/mahasiswa/:nim', (req, res) => {
  const nim = req.params.nim;
  res.send(`Mahasiswa berdasarkan Nim : ${nim}`);
});

app.post('/mahasiswa/post', (req, res) => {
  res.send('Ini Postingan Saya');
});
app.put('/mahasiswa/put', (req, res) => {
  res.send('Ini Untuk Update Data');
});
app.delete('/mahasiswa/delete', (req, res) => {
  res.send('ini Untuk Hapus Data');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

