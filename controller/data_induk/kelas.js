const Kelas = require('../../models').Kelas

exports.Create = async function (req, res) {
    try {
        const kelasCollection = await Kelas.create({
            nama: req.body.nama
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: kelasCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data kelas."
        })
    }
}