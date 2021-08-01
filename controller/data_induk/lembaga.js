const Lembaga = require('../../models').Lembaga

exports.Create = async function (req, res) {
    try {
        const lembagaCollection = await Lembaga.create({
            nama: req.body.nama
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: lembagaCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data lembaga."
        })
    }
}