const AbsenSiswa = require('../../models').AbsenSiswa

exports.Create = async function (req, res) {
    try {
        const protocol = req.protocol
        const hostname = req.get('host')
        const path = "/upload/" + req.file.filename
        const file_url = protocol + "://" + hostname + path

        const absenSiswaCollection = await AbsenSiswa.create({
            image_url: file_url,
            siswaId: req.body.siswaId
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah."
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal manambah data."
        })
    }
}