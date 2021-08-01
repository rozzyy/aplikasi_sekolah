const Jabatan = require('../../models').Jabatan

exports.Create = async function (req, res) {
    try {
        const jabatanCollection = await Jabatan.create({
            nama: req.body.nama
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah.",
            data: jabatanCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data jabatan."
        })        
    }
}