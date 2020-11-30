const express = require('express');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const homeRoute = require('./routes/homeRoute');
const isAuth = require('./middlewares/isAuth');
const cors = require('cors');
const db = require('./config/database');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/home', isAuth, homeRoute);

module.exports = app;
