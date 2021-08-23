const Jurusan = require('../../models').Jurusan

exports.Create = async function (req, res) {
    try {
        const jurusanCollection = await Jurusan.create({
            nama: req.body.nama,
            akreditasi: req.body.akreditasi,
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah.",
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data jurusan."
        })
    }
}

exports.Update = async function (req, res) {
    try {
        const jurusanCollection = await Jurusan.update({
            nama: req.body.nama,
            akreditasi: req.body.akreditasi,
        }, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil dirubah.",
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal merubah data jurusan."
        })
    }
}

exports.Read = async function (req, res) {
    try {
        const page = req.query.page
        const limit = req.query.limit
        const jurusanCollection = await Jurusan.findAndCountAll({
            limit: limit,
            offset: page * limit
        })

        res.status(200).json({
            status: "success",
            message: "Data jurusan berhasil ditampilkan.",
            data: jurusanCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Data jurusan gagal ditampilkan."
        })
    }
}

exports.Show = async function (req, res) {
    try {
        const jurusanCollection = await Jurusan.findOne({
            where: {
                id: req.params.id 
            }
        })

        res.status(200).json({
            status: "success",
            message: "Data jurusan berhasil ditampilkan.",
            data: jurusanCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Data jurusan gagal ditampilkan."
        })
    }
}

exports.Delete = async function (req, res) {
    try {
        await Jurusan.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            message: "Data berhasil dihapus."
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menghapus data pegawai."
        })
    }
}