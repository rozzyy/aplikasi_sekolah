const StatusKawin = require('../../models').StatusKawin

exports.Create = async function (req, res) {
    try {
        const statusKawinCollection = await statuskawin.create({
            nama: req.body.nama
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: statusKawinCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data status kawin."
        })
    }
}