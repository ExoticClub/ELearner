// authRoutes.js

const express = require('express');
const router = express.Router();
const {login} = require('../Controllers/AuthController');

// POST request to handle login
router.post('/login', login);

module.exports = router;
