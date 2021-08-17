const Ruangan = require('../../models').Ruangan

exports.Create = async function (req, res) {
    try {
        await Ruangan.create({
            nama: req.body.nama,
            tipe_ruangan: req.body.tipe_ruangan
        })

        res.status(200).json({
            status: "success",
            message: 'Data berhasil ditambah.'
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data."
        })
    }
}

exports.Update = async function (req, res) {
    try {
        await Ruangan.update({
            nama: req.body.nama,
            tipe_ruangan: req.body.tipe_ruangan
        }, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            status: "success",
            message: 'Data berhasil dirubah.'
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data."
        })
    }
}

exports.Read = async function (req, res) {
    try {
        const ruanganCollection = await Ruangan.findAll()

        res.status(200).json({
            status: "success",
            message: "Data sekolah berhasil ditampilkan.",
            data: ruanganCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Data ruangan gagal ditampilkan."
        })
    }
}

exports.Show = async function (req, res) {
    try {
        const ruanganCollection = await Ruangan.findOne({
            where: {
                id: req.params.id,
            }
        })

        res.status(200).json({
            status: "success",
            message: "Detail ruangan berhasil ditampilkan.",
            data: sekolahCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menampilkan detail sekolah."
        })
    }
}

exports.Delete = async function (req, res) {
    try {
        await Ruangan.destroy({
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
            msg: "Gagal menghapus data ruangan."
        })
    }
}