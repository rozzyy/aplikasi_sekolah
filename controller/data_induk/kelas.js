const Kelas = require('../../models').Kelas
const Tingkatan = require('../../models').Tingkatan
const Jurusan = require('../../models').Jurusan

exports.Create = async function (req, res) {
    try {
        const kelasCollection = await Kelas.create({
            nama: req.body.nama,
            jurusanId: req.body.jurusanId,
            tingkatanId: req.body.tingkatanId,
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambah",
            data: kelasCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Gagal menambah data kelas."
        })
    }
}

exports.Update = async function (req, res) {
    try {
        const kelasCollection = await Kelas.update({
            nama: req.body.nama,
            jurusanId: req.body.jurusanId,
            tingkatanId: req.body.tingkatanId,
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
            msg: "Gagal merubah data kelas."
        })
    }
}

exports.Read = async function (req, res) {
    try {
        const page = req.query.page
        const limit = req.query.limit
        const kelasCollection = await Kelas.findAndCountAll({
            include: [
                {
                    model: Tingkatan
                },
                {
                    model: Jurusan
                }
            ],
            limit: limit,
            page: page * limit
        })

        res.status(200).json({
            status: "success",
            message: "Data berhasil ditampilkan.",
            data: kelasCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: 'Data gagal ditampilkan.'
        })
    }
}

exports.Show = async function (req, res) {
    try {
        const kelasCollection = await Kelas.findOne({
            where: {
                id: req.params.id 
            }
        })

        res.status(200).json({
            status: "success",
            message: "Data kelas berhasil ditampilkan.",
            data: kelasCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Data kelas gagal ditampilkan."
        })
    }
}

exports.Options = async function (req, res) {
    try {
        const kelasCollection = await Kelas.findAll({
            attributes: ['id', 'nama']
        })
        
        res.status(200).json({
            status: "success",
            message: "Data berhasil ditampilkan.",
            data: kelasCollection
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: 'Data gagal ditampilkan.'
        })
    }
}