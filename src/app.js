const { json } = require('express');
const express = require('express');
const routes = require('./routes');
const app = express();
const db = require('./config/database');

app.use(express.json());
app.use(routes);

module.exports = app;
