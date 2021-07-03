const express = require('express')
const router = express.Router()
const userController = require('../../controller/user/user')   
const loginController = require('../../controller/auth/login')
const authentication = require('../../middleware/auth/auth')
const { body } = require('express-validator')

router.post('/user',authentication, userController.userCreate)
router.get('/user',authentication, userController.userAll)
router.get('/user/:id',authentication, userController.userDetail)
router.post('/user/:id',authentication, userController.userUpdate)
router.delete('/user/:id',authentication, userController.userDestroy)

router.post('/login', loginController.login)

router.get('/logout', (req, res) => {
    res.json({
        msg: "This is logout page."
    })
})

module.exports = router
