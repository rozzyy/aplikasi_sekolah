const Jabatan = require('../../models').Jabatan

exports.Create = async function (req, res) {
    try {
        await Jabatan.create({
            nama: req.body.nama
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data jabatan."
        })        
    }
}