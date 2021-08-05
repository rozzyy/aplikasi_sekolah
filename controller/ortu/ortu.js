const Ortu = require ('../../models').Ortu

exports.Create = async function (req, res) {
    try {
        const ortuCollection = await Ortu.create({
            nama: req.body.nama,
            tahun_lahir: req.body.tahun_lahir,
            pendidikan: req.body.pendidikan,
            pekerjaan: req.body.pekerjaan,
            penghasilan: req.body.penghasilan,
            nik: req.body.nik,
            status_wali: req.body.status_wali
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: ortuCollection,
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: "failed.",
            msg: "Gagal menambah data orang tua."
        })     
    }
}

exports.Read = async function (req, res) {
    try {
        const ortuCollection = await Ortu.findAll()

        res.status(200).json({
            status: "success",
            message: "Data orang tua berhasil ditampilkan.",
            data: ortuCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menampilkan data orang tua."
        })
    }
}

exports.Show = async function (req, res) {
    try {
        const ortuCollection = await Ortu.findOne({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            status: "success",
            message: "Data detail orang tua berhasil ditampilkan.",
            data: ortuCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menampilkan data detail orang tua."
        })
    }
}

exports.Update = async function (req, res) {
    try {
        const ortuCollection = await Ortu.update({
            nama: req.body.nama,
            tahun_lahir: req.body.tahun_lahir,
            pendidikan: req.body.pendidikan,
            pekerjaan: req.body.pekerjaan,
            penghasilan: req.body.penghasilan,
            nik: req.body.nik,
            status_wali: req.body.status_wali
        }, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil dirubah",
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: "failed.",
            msg: "Gagal merubahh data orang tua."
        })     
    }
}

exports.Delete = async function (req, res) {
    try {
        await Ortu.destroy({
            where:{
                id: req.params.id
            }
        })

        res.status(200).json({
            message: "Data berhasil dihapus."
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menghapus data orang tua."
        })
    }
}