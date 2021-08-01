const Transportasi = require('../../models').Transportasi

exports.Create = async function (req, res) {
    try {
        const transportasiCollection = await Transportasi.create({
            nama: req.body.nama
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: transportasiCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data transportasi."
        })
    }
}