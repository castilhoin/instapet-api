const { Router } = require('express');
const authController = require('../controllers/authController');
const routes = Router();

routes.post('/', authController.auth);

module.exports = routes;
