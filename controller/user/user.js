const User = require('../../models').User
const bcrypt = require('bcrypt')

exports.userCreate = async function (req, res) {
    const salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hashSync(req.body.password, salt)
    try {
        await User.create({
            nama: req.body.nama,
            no_induk: req.body.no_induk,
            email: req.body.email,
            password: hash,
            roleId: req.body.roleId,
        })

        res.status(200).json({
            status: "success",
            msg: "User berhasil ditambah."
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah user!",
        })
    }
}

exports.userAll = async function (req, res) {
    try {
        let condition = req.query.role
        const page = req.query.page
        const limit = req.query.limit
        const userCollection = await User.findAndCountAll({
            limit: limit,
            offset: page * limit,
            attributes: {
                exclude: ["password"]
            },
            where: {
                roleId: condition
            },
            include: ["Role"]
        })
        res.status(200).json({
            status: "success",
            data: userCollection
        })
    } catch (error) {
        res.json(error)
    }
}

exports.userDetail = async function (req, res) {
    try {
        const userCollection = await User.findOne({
            attributes: {
                exclude: ["password"]
            },  
            where: {
                id: req.params.id
            },
            include: {
                model: Role,
                as: "Role"
            }
        })

        res.status(200).json({
            status: "success",
            data: userCollection
        })
    } catch (error) {
        res.status(400).json({
            msg: "Data tidak ditemukan."
        })
    }
}

exports.userUpdate = async function (req, res) {
    try {
        await User.update({
            nama: req.body.nama,
            no_induk: req.body.no_induk,
            email: req.body.email,
            password: req.body.password,
            roleId: req.body.roleId,
        }, {
            where: {
                id: req.params.id
            }
        })

        const userDetail = await User.findByPk(req.params.id, {attributes: { exclude: ["password"] }})

        res.status(200).json({
            status: "success",
            msg: userDetail
        })
    } catch (error) {
        res.json({
            msg: "user gagal diupdate."
        })
    }
}

exports.userDestroy = async function (req, res) {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            msg: "User berhasil dihapus."
        })
    } catch (error) {
        res.json({
            msg: "User gagal dihapus."
        })
    }
}