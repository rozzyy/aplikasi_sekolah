const Tingkatan = require('../../models').Tingkatan

exports.Read = async function (req, res) {
    try {
        const tingkatanCollection = await Tingkatan.findAll()

        res.status(200).json({
            status: "success",
            message: "Data tingkatan berhasil ditampilkan.",
            data: tingkatanCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Data tingkatan gagal ditampilkan."
        })
    }
}