const User = require('../../models').User
const { Op } = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.login = async function (req, res) {
    try {
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    {
                        email: {
                            [Op.like]: req.body.email
                        }
                    },
                    {
                        no_induk: {
                            [Op.like]: req.body.no_induk
                        }
                    }
                ]
            }
        })

        if(user) {
           if (bcrypt.compareSync(req.body.password, user.password)) {
               const token = jwt.sign({id: user.id }, process.env.TOKEN_SECRET)

               const userData = await User.findByPk(user.id, { attributes: {
                   exclude: ["password"]
               }})

               res.status(200).json({
                   status: "success",
                   data: userData,
                   token: token
               })
           } else {
               res.status(500).json({
                   status: "error",
                   msg: "Password anda tidak valid!"
               })
           }
        }

    } catch (error) {
        console.log(error)
        res.json({
            msg: "Email, Nomor Induk atau password anda tidak valid."
        })
    }
}