const Siswa = require('../../models').Siswa
const Ortu = require('../../models').Ortu
const Pegawai = require('../../models').Pegawai
const User = require('../../models').User


exports.Profil = async function(req, res) {
    try {
        const user = await User.findOne({
            where: {
                id: res.locals.apiUser.id
            }
        })
        
        let data = ''

        if (user.roleId === 1) {
            data = await Siswa.findOne({
                where: {
                    userId: user.id
                }
            })
        } else if (user.roleId === 2) {
            data = await Ortu.findOne({
                where: {
                    userId: user.id
                }
            })
        } else if (user.roleId === 3) {
            data = await Pegawai.findOne({
                where: {
                    userId: user.id
                }
            })
        }

        res.status(200).json({
            data: data
        })

    } catch (error) {
        console.log(error)
        res.json({
            msg: "Failed."
        })
    }
}