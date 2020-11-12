var express = require('express');
var router = express.Router();
var userController = require('../controllers/users')

/* GET users listing. */
router.get('/', userController.getUsers);
router.get('/create', userController.createUser_get)
router.post('/create', userController.createUser_post)
router.get('/:id/update', userController.updateUser_get);
router.post('/:id/update', userController.updateUser);
router.post('/:id/delete', userController.deleteUser);

module.exports = router;
