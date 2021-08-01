const Rombel = require("../../models").Rombel

exports.Create = async function (req, res) {
    try {
        const rombelCollection = await Rombel.create({
            kelas: req.body.kelas,
            jurusan: req.body.jurusan,
            ruang: req.body.ruang
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: rombelCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data rombel."
        })
    }
}