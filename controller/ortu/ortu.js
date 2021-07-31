const Ortu = require ('../../models').Ortu

exports.Create = async function (req, res) {
    try {
        await Ortu.create({
            nama: req.body.nama,
            tahun_lahir: req.body.tahun_lahir,
            pendidikan: req.body.pendidikan,
            pekerjaan: req.body.pekerjaan,
            penghasilan: req.body.penghasilan,
            nik: req.body.nik,
            status: req.body.status
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data orang tua."
        })     
    }
}