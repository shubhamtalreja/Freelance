const express = require('express');
const { getUsersByService, getUserById } = require('../controllers/userController');
const router = express.Router();

router.get('/service/:serviceId', getUsersByService);
router.get('/:userId', getUserById);

module.exports = router;
