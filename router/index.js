const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))
router.use('/profil', require('./main'))
router.use('/data-induk', require('./data_induk'))
router.use('/e-learning', require('./elearning'))

module.exports = router