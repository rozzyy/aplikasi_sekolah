const Semester = require('../../models').Semester
const TahunAjaran = require('../../models').TahunAjaran

exports.Create = async function (req, res) {
    try {
        const semesterCollection = await Semester.create({
            nama: req.body.nama,
            tgl_mulai: req.body.tgl_mulai,
            tgl_akhir: req.body.tgl_akhir,
            status: req.body.status,
            tahun_ajaran_id: req.body.tahun_ajaran_id
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah"
        })

    } catch (error) {
        console.log(error)
        res.json({
            msg: 'Gagal menambah data.'
        })
    }
}

exports.Update = async function (req, res) {
    try {
        const semesterCollection = await Semester.update({
            nama: req.body.nama,
            tgl_mulai: req.body.tgl_mulai,
            tgl_akhir: req.body.tgl_akhir,
            status: req.body.status,
            tahun_ajaran_id: req.body.tahun_ajaran_id
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
            msg: "Gagal merubah data."
        })
    }
}

exports.Read = async function (req, res) {
    try {
        const page = req.query.page
        const limit = req.query.limit
        const semesterCollection = await Semester.findAndCountAll({
            limit: limit,
            offset: page * limit,
            include: [
                {
                    model: TahunAjaran
                }
            ]
        })

        res.status(200).json({
            status: "success",
            message: "Data semester berhasil ditampilkan.",
            data: semesterCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Data semester gagal ditampilkan."
        })
    }
}

exports.Show = async function (req, res) {
    try {
        const semesterCollection = await Semester.findOne({
            where: {
                id: req.params.id 
            }
        })

        res.status(200).json({
            status: "success",
            message: "Data Semester berhasil ditampilkan.",
            data: semesterCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Data semester gagal ditampilkan."
        })
    }
}

exports.Delete = async function (req, res) {
    try {
        await Semester.destroy({
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
            msg: "Gagal menghapus data semester."
        })
    }
}
