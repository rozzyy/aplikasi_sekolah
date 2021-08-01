const Ortu = require ('../../models').Ortu

exports.Create = async function (req, res) {
    try {
        const OrtuCollection = await Ortu.create({
            nama: req.body.nama,
            tahun_lahir: req.body.tahun_lahir,
            pendidikan: req.body.pendidikan,
            pekerjaan: req.body.pekerjaan,
            penghasilan: req.body.penghasilan,
            nik: req.body.nik,
            status: req.body.status
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: OrtuCollection,
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: "failed.",
            msg: "Gagal menambah data orang tua."
        })     
    }
}