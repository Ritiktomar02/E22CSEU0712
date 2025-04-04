const express = require('express');
const app = express();
require('dotenv').config();

const numbersRoute = require('./controllers/numbersController');


app.use('/numbers', numbersRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
