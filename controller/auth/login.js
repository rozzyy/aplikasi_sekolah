const User = require('../../models').User

exports.login = async function (req, res) {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if(user) {
           if (req.body.password === user.password) {
               res.status(200).json({
                   status: "success",
                   msg: "Login berhasil!"
               })
           } 
        }

    } catch (error) {
        res.json({
            msg: "email atau password tidak valid."
        })
    }
}