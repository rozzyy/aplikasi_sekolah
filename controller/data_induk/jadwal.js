const Jadwal = require("../../models").Jadwal

exports.Create = async function (req, res) {
    try {
        const jadwalCollection = await Jadwal.create({
            nama: req.body.nama,
            rombelId: req.body.rombelId,
            jam_mulai: req.body.jam_mulai,
            jam_selesai: req.body.jam_selesai,
            hari: req.body.hari,
            pegawaiId: req.body.pegawaiId
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah.",
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data jadwal"
        })
    }
}

exports.Read = async function (req, res) {
    try {
        const jadwalCollection = await Jadwal.findAll()

        res.status(200).json({
            status: "success",
            message: "Data jadwal berhasil ditampilkan.",
            data: jadwalCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Data jadwal gagal ditampilkan."
        })
    }
}

exports.Show = async function (req, res) {
    try {
        const jadwalCollection = await Jadwal.findOne({
            where: {
                id: req.params.id,
            }
        })

        res.status(200).json({
            status: "success",
            message: "Detail jadwal berhasil ditampilkan.",
            data: jadwalCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menampilkan detail jadwal."
        })
    }
}

exports.Update = async function (req, res) {
    try {
        const jadwalCollection = await Jadwal.update({
            nama: req.body.nama,
            rombelId: req.body.rombelId,
            jam_mulai: req.body.jam_mulai,
            jam_selesai: req.body.jam_selesai,
            hari: req.body.hari,
            pegawaiId: req.body.pegawaiId
        }, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil dirubah.",
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data jadwal"
        })
    }
}

exports.Delete = async function (req, res) {
    try {
        await Jadwal.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            message: "Data berhasil dihapus."
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menghapus data jadwal."
        })
    }
}