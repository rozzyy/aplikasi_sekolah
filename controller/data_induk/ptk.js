const Ptk = require('../../models').Ptk

exports.Create = async function (req, res) {
    try {
        const ptkCollection = await Ptk.create({
            nama: req.body.nama
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: ptkCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data."
        })
    }
}