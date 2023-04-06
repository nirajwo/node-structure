const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const validator = require('../middleware/joi_validation');

router.get('/', userController.get_users);
router.post('/', validator.create_user, userController.create_user);
router.put('/:id', validator.create_user, userController.update_user);
router.delete('/:id', userController.delete_user);

module.exports = router;
