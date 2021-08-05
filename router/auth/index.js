const express = require('express')
const router = express.Router()
const tokenVerify = require('../../middleware/auth/auth')

const userController = require('../../controller/user/user')   
const loginController = require('../../controller/auth/login')
// const authentication = require('../../middleware/auth/auth')
const { checkSchema } = require('express-validator')
const validate = require('../../validation/login/loginVal').validate
const loginSchema = require('../../validation/login/loginVal').loginSchema

router.post('/user', tokenVerify, userController.userCreate)
router.get('/user', tokenVerify, userController.userAll)
router.get('/user/:id', tokenVerify, userController.userDetail)
router.put('/user/:id', tokenVerify, userController.userUpdate)
router.delete('/user/:id', tokenVerify, userController.userDestroy)

router.post('/login', validate(checkSchema(loginSchema)), loginController.login)

router.get('/logout', (req, res) => {
    res.json({
        msg: "This is logout page."
    })
})

module.exports = router
