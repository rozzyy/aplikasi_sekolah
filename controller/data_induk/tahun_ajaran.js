const TahunAjaran = require('../../models').TahunAjaran

exports.Create = async function (req, res) {
    try {
       const tahunAjaranCollection = await TahunAjaran.create({
            nama         : req.body.nama,
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah.",
            data: tahunAjaranCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data tahun ajaran."
        })
    }
}

exports.Read = async function (req, res) {
    try {
        const page = req.query.page
        const limit = req.query.limit
        const tahunAjaranCollection = await TahunAjaran.findAndCountAll({
            limit: limit,
            offset: page * limit
        })

        res.status(200).json({
            status: "success",
            message: "Data pegawai berhasil ditampilkan.",
            data: tahunAjaranCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Data pegawai gagal ditampilkan."
        })
    }
}

exports.Show = async function (req, res) {
    try {
        const tahunAjaranCollection = await TahunAjaran.findOne({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            status: "success",
            message: "Data detail tahun ajaran berhasil ditampilkan.",
            data: tahunAjaranCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Data pegawai gagal ditampilkan."
        })
    }
}

exports.Update =  async function (req, res) {
    try {
        const tahunAjaranCollection = await TahunAjaran.update({
            nama         : req.body.nama,
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
            msg: "Data gagal dirubah."
        })
    }
}

exports.Delete = async function (req, res) {
    try {
        await TahunAjaran.destroy({
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
            msg: "Gagal menghapus data tahun ajaran."
        })
    }
}