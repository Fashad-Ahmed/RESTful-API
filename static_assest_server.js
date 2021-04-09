const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// using middleware
app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('workinggggggg');