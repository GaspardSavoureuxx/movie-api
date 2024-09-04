// app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.json());
app.use('/api', routes); // Utilisation des routes avec un préfixe '/api'

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});