const { Router } = require('express');
const homeController = require('../controllers/homeController');
const routes = Router();

routes.get('/', homeController.read);

module.exports = routes;
