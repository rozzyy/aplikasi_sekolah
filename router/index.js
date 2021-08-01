const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))
router.use('/profil', require('./main'))
router.use('/data-induk', require('./data_induk'))

module.exports = router