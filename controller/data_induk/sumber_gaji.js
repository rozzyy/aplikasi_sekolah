const SumberGaji = require('../../models').SumberGaji

exports.Create = async function (req, res) {
    try {
        const sumberGajiCollection = await SumberGaji.create({
            nama: req.body.nama
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: sumberGajiCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data sumber gaji."
        })
    }
}