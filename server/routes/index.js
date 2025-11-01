const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('My Student ID is 22393656. Welcome to Express');
});

app.listen(port, host, () => console.log(`Running on ${host}:${port}`));
