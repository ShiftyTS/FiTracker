const express = require('express')

// Controller functions
const { loginUser, registerUser } = require('../controllers/users')

const router = express.Router()

// Login
router.post('/login', loginUser)

// Register
router.post('/register', registerUser)

module.exports = router