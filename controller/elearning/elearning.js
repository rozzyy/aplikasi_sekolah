const Elearning = require('../../models').Elearning
const Tingkatan = require('../../models').Tingkatan
const Pegawai = require('../../models').Pegawai

exports.Create = async function (req, res) {
    try {
        const protocol = req.protocol
        const hostname = req.get('host')
        const path = "/upload/" + req.file.filename
        const file_url = protocol + "://" + hostname + path

        const elearningCollection = await Elearning.create({
            link: req.body.link,
            judul: req.body.judul,
            mapel: req.body.mapel,
            tingkatanId: req.body.tingkatanId,
            pegawaiId: req.body.pegawaiId,
            file: file_url
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah."
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data elearning."
        })
    }
}

exports.Read = async function (req, res) {
    try {
        const elearningCollection = await Elearning.findAll({
            include: [
                {
                    model: Tingkatan
                },
                {
                    model: Pegawai,
                    attributes: ['nama']
                }
            ]
        })

        res.status(200).json({
            status: "success",
            message: "Data elearning berhasil ditampilkan.",
            data: elearningCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Data elearning gagal ditampilkan."
        })
    }
}

exports.Show = async function (req, res) {
    try {
        const elearningCollection = await Elearning.findOne({
            where: {
                id: req.params.id,
            }
        })

        res.status(200).json({
            status: "success",
            message: "Detail elearning berhasil ditampilkan.",
            data: elearningCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menampilkan detail elearning."
        })
    }
}

exports.Update = async function (req, res) {
    try {
        let file_url = ''
        if (req.file) {
            const protocol = req.protocol
            const hostname = req.get('host')
            const path = "/upload/" + req.file.filename
            file_url = protocol + "://" + hostname + path
        } else {
            file_url = req.body.file
        }
        const elearningCollection = await Elearning.update({
            link: req.body.link,
            judul: req.body.judul,
            rombelId: req.body.rombelId,
            pelajaranId: req.body.pelajaranId,
            pegawaiId: req.body.pegawaiId,
            file: file_url
        }, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil dirubah."
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal merubah data elearning."
        })
    }
}

exports.Delete = async function (req, res) {
    try {
        await Elearning.destroy({
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
            msg: "Gagal menghapus data elearning."
        })
    }
}