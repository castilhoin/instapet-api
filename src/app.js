const express = require('express');
const userRoute = require('./routes/userRoute');
const cors = require('cors');
const db = require('./config/database');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/users', userRoute);

module.exports = app;
