const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const getDefault = require('./routes/getDefault')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + './../dist'));

app.use(getDefault)

module.exports = app;