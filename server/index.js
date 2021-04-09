const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./configs/database');

const app = express();
app.use(cors());

const bookController = require('./controllers/bookController');

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

app.use('/api/books', bookController);

app.listen(8000);
console.log("Sever is up!");

