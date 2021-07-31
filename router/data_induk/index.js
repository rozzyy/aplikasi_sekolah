const express = require('express')
const router = exports.Router()

// controller
const jabatanController = require('../../controller/jabatan/jabatan')

// validation
const { checkSchema } = require('express-validator')
