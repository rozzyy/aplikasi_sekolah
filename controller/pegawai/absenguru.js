const AbsenGuru = require('../../models').AbsenGuru

exports.Create = async function (req, res) {
    try {
        await AbsenGuru.create({
            siswa_id: req.body.siswa_id,
            jam_hadir: req.body.jam_hadir,
            pegawai_id: req.body.pegawai_id,
            kehadiran: req.body.kehadiran,
            keterangan: req.body.keterangan
        })

        res.status(200).json({
            status: 'success',
            message: 'Data berhasil ditambah.'
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: 'Data gagal ditambah.'
        })
    }
}