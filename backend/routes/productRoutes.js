const express = require('express');
const router = express.Router()

const {findAll} = require('../controllers/product')

router.get('/products',findAll)

module.exports = router