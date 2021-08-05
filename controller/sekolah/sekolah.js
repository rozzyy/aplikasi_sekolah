const Sekolah = require('../../models').Sekolah

exports.Create = async function (req, res) {
    try {
        await Sekolah.create({
            jenjang: req.body.jenjang,
            nama: req.body.nama,
            notelepon: req.body.notelepon,
            web: req.body.web,
            email: req.body.email,
            alamat: req.body.alamat,
            provinsi: req.body.provinsi,
            kabkota: req.body.kabkota,
            kecamatan: req.body.kecamatan,
            kelurahan: req.body.kelurahan,
            dusun: req.body.dusun,
            rt_rw: req.body.rt_rw,
            tgl_berdiri: req.body.tgl_berdiri,
            akreditas: req.body.akreditas,
            kurikulum: req.body.kurikulum,
            npsn: req.body.npsn,
            luas_tanah: req.body.luas_tanah,
            status_bos: req.body.status_bos,
            penyelenggaraan: req.body.penyelenggaraan,
            jam_masuk: req.body.jam_masuk,
            jam_pulang: req.body.jam_pulang,
            lama_belajar: req.body.lama_belajar,
            internet: req.body.internet,
            perpustakaan: req.body.perpustakaan,
            batas_spp: req.body.batas_spp
        })

        res.status(200).json({
            status: "success",
            message: 'Data berhasil ditambah.'
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data."
        })
    }
}

exports.Update = async function (req, res) {
    try {
        await Sekolah.update({
            jenjang: req.body.jenjang,
            nama: req.body.nama,
            notelepon: req.body.notelepon,
            web: req.body.web,
            email: req.body.email,
            alamat: req.body.alamat,
            provinsi: req.body.provinsi,
            kabkota: req.body.kabkota,
            kecamatan: req.body.kecamatan,
            kelurahan: req.body.kelurahan,
            dusun: req.body.dusun,
            rt_rw: req.body.rt_rw,
            tgl_berdiri: req.body.tgl_berdiri,
            akreditas: req.body.akreditas,
            kurikulum: req.body.kurikulum,
            npsn: req.body.npsn,
            luas_tanah: req.body.luas_tanah,
            status_bos: req.body.status_bos,
            penyelenggaraan: req.body.penyelenggaraan,
            jam_masuk: req.body.jam_masuk,
            jam_pulang: req.body.jam_pulang,
            lama_belajar: req.body.lama_belajar,
            internet: req.body.internet,
            perpustakaan: req.body.perpustakaan,
            batas_spp: req.body.batas_spp
        }, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            status: "success",
            message: 'Data berhasil dirubah.'
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data."
        })
    }
}

exports.Read = async function (req, res) {
    try {
        const sekolahCollection = await Sekolah.findAll()

        res.status(200).json({
            status: "success",
            message: "Data sekolah berhasil ditampilkan.",
            data: sekolahCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Data sekolah gagal ditampilkan."
        })
    }
}

exports.Show = async function (req, res) {
    try {
        const sekolahCollection = await Sekolah.findOne({
            where: {
                id: req.params.id,
            }
        })

        res.status(200).json({
            status: "success",
            message: "Detail sekolah berhasil ditampilkan.",
            data: sekolahCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menampilkan detail sekolah."
        })
    }
}

exports.Delete = async function (req, res) {
    try {
        await Sekolah.destroy({
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
            msg: "Gagal menghapus data sekolah."
        })
    }
}