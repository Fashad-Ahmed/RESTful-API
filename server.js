const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/:id', (req, res) => {
    console.log(req.params)
    res.status(404).send('not found');

});

app.listen(3000);
console.log('workinggggggg');