const express = require('express')
const router = express.Router()
const userController = require('../controller/userControl')
router.post('/signup', userController.sign)

module.exports = router
