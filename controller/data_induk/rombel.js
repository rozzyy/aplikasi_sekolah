const Rombel = require("../../models").Rombel;
const Siswa = require("../../models").Siswa;
const Kelas = require("../../models").Kelas;
const TahunAjaran = require('../../models').TahunAjaran

exports.Read = async function (req, res) {
    try {
        const page = req.query.page;
        const limit = req.query.limit;
        const rombelCollection = await Rombel.findAndCountAll({
            limit: limit,
            page: page * limit,
            include: {
                model: Siswa
            }
        });

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditampilkan.",
            data: rombelCollection
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: "Data gagal ditampilkan."
        });
    }
};

exports.Create = async function (req, res) {
    try {
        const rombel = await Rombel.create({
            kelas_id: req.body.kelas_id,
            tahun_ajaran_id: req.body.tahun_ajaran_id
        });

        res.status(200).json({
            status: "success",
            message: "Data berhasil disimpan.",
            data: rombel
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: "Data gagal disimpankan."
        });
    }
};

exports.SearchByKelasAndTahun = async function (req, res) {
    try {
        const kelas_id = req.query.kelas_id;
        const tahun_ajaran_id = req.query.tahun_ajaran_id;
        const rombelCollection = await Rombel.findAndCountAll({
            where: {
                kelas_id: kelas_id,
                tahun_ajaran_id: tahun_ajaran_id
            },
            include: [
                {
                    model: Siswa,
                },
                {
                    model: Kelas
                },
                {
                    model: TahunAjaran
                }
            ],
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditampilkan",
            data: rombelCollection,
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: "Data gagal ditampilkan."
        });
    }
};

exports.CheckRombel = async function (req, res) {
    try {
        const kelas_id = req.query.kelas_id
        const tahun_ajaran_id = req.query.tahun_ajaran_id
        const rombelCollection = await Rombel.findOrCreate({
            where: {
                kelas_id: kelas_id,
                tahun_ajaran_id: tahun_ajaran_id
            },
            include: [
                {
                    model: Kelas
                },
                {
                    model: TahunAjaran
                }
            ]
        })

        res.status(200).json({
            status: 'success',
            message: "Data berhasil ditemukan.",
            data: rombelCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: 'Data gagal ditemukan.'
        })
    }
}