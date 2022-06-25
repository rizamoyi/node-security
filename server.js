const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.get('/secret', (req, res) => {
  res.send('You are accessing your personal secret value 52');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
