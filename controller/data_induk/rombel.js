const Rombel = require("../../models").Rombel;
const Siswa = require("../../models").Siswa;
const Kelas = require("../../models").Kelas;
const sequelize = require("sequelize");

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
        await Rombel.create({
            kelas_id: req.body.kelas_id,
            tahun_ajaran_id: req.body.tahun_ajaran_id
        });

        res.status(200).json({
            status: "success",
            message: "Data berhasil disimpan."
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
