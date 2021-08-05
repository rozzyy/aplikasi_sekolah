const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../storage/upload'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

// controller
const elearningController = require('../../controller/elearning/elearning')

// validation
// validation
const { checkSchema } = require('express-validator')
const validate = require('../../validation/login/loginVal').validate

// elearning validation
const elearningSchema = require('../../validation/elearning/elearning').elearningSchema

// routing 
// elearning
router.post("/", multer({ storage }).single('file'), validate(checkSchema(elearningSchema)), elearningController.Create)
router.put("/:id", multer({ storage }).single('file'), validate(checkSchema(elearningSchema)), elearningController.Update)
router.get("/", elearningController.Read)
router.get("/:id", elearningController.Show)
router.delete("/:id", elearningController.Delete)

module.exports = router