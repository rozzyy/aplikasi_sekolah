const JenisTinggal = require('../../models').JenisTinggal

exports.Create = async function (req, res) {
    try {
        const jenisTinggalCollection = await JenisTinggal.create({
            nama: req.body.nama
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: jenisTinggalCollection
        })

    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data jenis tinggal."
        })
    }
}