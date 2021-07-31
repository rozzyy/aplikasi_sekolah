const Pegawai = require('../../models').Pegawai

exports.Create = async function (req, res) {
    try {
        await Pegawai.create({
            nama         : req.body.nama,
            nuptk        : req.body.nuptk,
            jenis_kelamin: req.body.jenis_kelamin,
            tmpt_lahir   : req.body.tmpt_lahir,
            tgl_lahir    : req.body.tgl_lahir,
            nip          : req.body.nip,
            status_pegawai: req.body.status_pegawai,
            jenis_ptk: req.body.jenis_ptk,
            agama: req.body.agama,
            alamat: req.body.alamat,
            rt: req.body.rt,
            rw: req.body.rw,
            dusun: req.body.dusun,
            kelurahan: req.body.kelurahan,
            kecamatan: req.body.kecamatan,
            kodepos: req.body.kodepos,
            telepon: req.body.telepon,
            hp: req.body.hp,
            email: req.body.email,
            tgs_tambahan: req.body.tgs_tambahan,
            sk_cpns: req.body.sk_cpns,
            tgl_cpns: req.body.tgl_cpns,
            sk_angkat: req.body.sk_angkat,
            tmt_sk: req.body.tmt_sk,
            lembaga_angkat: req.body.lembaga_angkat,
            golongan: req.body.golongan,
            sumber_gaji: req.body.sumber_gaji,
            nama_ibu: req.body.nama_ibu,
            status: req.body.status,
            nama_pasangan: req.body.nama_pasangan,
            nip_pasangan: req.body.nip_pasangan,
            pkrj_pasangan: req.body.pkrj_pasangan,
            tmt_pns_pasangan: req.body.tmt_pns_pasangan,
            lisensi_kepsek: req.body.lisensi_kepsek,
            diklat: req.body.diklat,
            braille: req.body.braille,
            bhs_isyarat: req.body.bhs_isyarat,
            npwp: req.body.npwp,
            nama_wp: req.body.nama_wp,
            bank: req.body.bank,
            no_rek: req.body.no_rek,
            rek_atas_nama: req.body.rek_atas_nama,
            nik: req.body.nik,
            no_kk: req.body.no_kk,
            karpeg: req.body.karpeg,
            karis: req.body.karis,
            lintang: req.body.lintang,
            bujur: req.body.bujur,
            nuks: req.body.nuks
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data pegawai."
        })
    }
}