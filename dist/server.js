var express = require('express');
const bookRouter = require('./routes');

var app = express();

app.use('/', bookRouter);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})