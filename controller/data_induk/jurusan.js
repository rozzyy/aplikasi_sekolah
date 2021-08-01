const Jurusan = require('../../models').Jurusan

exports.Create = async function (req, res) {
    try {
        const jurusanCollection = await Jurusan.create({
            nama: req.body.nama,
            kode: req.body.kode,
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: jurusanCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data jurusan."
        })
    }
}