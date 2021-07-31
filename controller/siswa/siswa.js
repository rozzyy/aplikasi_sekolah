const Siswa = require('../../models').Siswa

exports.Create = async function (req, res) {
    try {
        await Siswa.create({
            nama: req.body.nama,
            nipd: req.body.nama,
            jenis_kelamin: req.body.jenis_kelamin,
            nisn: req.body.nisn,
            tmpt_lahir: req.body.tmpt_lahir,
            tgl_lahir: req.body.tgl_lahir,
            nik: req.body.nik,
            agama: req.body.agama,
            alamat: req.body.alamat,
            rt: req.body.rt,
            rw: req.body.rw,
            dusun: req.body.dusun,
            kelurahan: req.body.kelurahan,
            kecamatan: req.body.kecamatan,
            kodepos: req.body.kodepos,
            jenis_tinggal: req.body.jenis_tinggal,
            transportasi: req.body.transportasi,
            telepon: req.body.telepon,
            hp: req.body.hp,
            email: req.body.email,
            skhun:req.body.skhun,
            penerima_kip: req.body.penerima_kip,
            no_kip: req.body.no_kip,
            rombel: req.body.rombel,
            no_pun: req.body.no_pun,
            no_ijazah: req.body.no_ijazah,
            penerima_kip: req.body.penerima_kip,
            no_kip: req.body.no_kip,
            nama_kip: req.body.nama_kip,
            no_akta: req.body.no_akta,
            bank: req.body.bank,
            no_rek: req.body.no_rek,
            layak_pip: req.body.layak_pip,
            alasan_pip: req.body.alasan_pip,
            kbthn_khusus: req.body.kbthn_khusus,
            sekolah_asal: req.body.sekolah_asal,
            anak_ke: req.body.anak_ke,
            lintang: req.body.lintang,
            bujur: req.body.bujur,
            berat_badan: req.body.berat_badan,
            tinggi_badan: req.body.tinggi_badan,
            ling_kepala: req.body.ling_kepala,
            jmlh_saudara: req.body.jmlh_saudara,
            jarak_rumah: req.body.jarak_rumah
        })

        res.status(200).json({
            status: "success",
            msg: "Siswa berhasil ditambah.",
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data siswa."
        })
    }
}