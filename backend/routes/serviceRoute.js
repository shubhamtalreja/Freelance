const express = require('express');
const { getAllServices, createService } = require('../controllers/serviceController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAllServices);
router.post('/', authMiddleware, createService);

module.exports = router;
