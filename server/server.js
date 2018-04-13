// require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/')

app.use(express.static(__dirname +'./../'));
app.listen(3000); 

module.exports = app;
