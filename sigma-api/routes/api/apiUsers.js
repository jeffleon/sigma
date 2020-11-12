var express = require('express');
var router = express.Router();
var userController = require('../../controllers/api/users')

/* GET users listing. */

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
