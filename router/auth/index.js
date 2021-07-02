const express = require('express')
const router = express.Router()
const userController = require('../../controller/user/user')   
const loginController = require('../../controller/auth/login')   

router.post('/user', userController.userCreate)
router.get('/user', userController.userAll)
router.get('/user/:id', userController.userDetail)
router.post('/user/:id', userController.userUpdate)
router.delete('/user/:id', userController.userDestroy)

router.post('/login', loginController.login)

router.get('/logout', (req, res) => {
    res.json({
        msg: "This is logout page."
    })
})

module.exports = router
