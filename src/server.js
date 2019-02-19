var express = require('express');
const sequelize = require('./models');

var app = express();

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });