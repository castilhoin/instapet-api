const { Router } = require('express');
const userController = require('../controllers/userController');
const routes = Router();

routes.post('/', userController.create);
routes.get('/', userController.read);
routes.get('/:id', userController.show);
routes.put('/:id', userController.update);
routes.delete('/:id', userController.delete);

module.exports = routes;
