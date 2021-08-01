const Tugas = require('../../models').Tugas

exports.Create = async function (req, res) {
    try {
        const tugasCollection = await Tugas.create({
            nama: req.body.nama
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: tugasollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data tugas tambahan."
        })
    }
}