const express = require('express');
const userRoute = require('./routes/userRoute');
const db = require('./config/database');

const app = express();

app.use(express.json());
app.use('/users', userRoute);

module.exports = app;
