const express = require('express')
const router = express.Router()
const tokenVerify = require('../../middleware/auth/auth')
const multer = require('multer')
const path = require('path')

// multer storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../storage/upload'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

// controller
const siswaController = require('../../controller/siswa/siswa')
const ortuController = require('../../controller/ortu/ortu')
const pegawaiController = require('../../controller/pegawai/pegawai')
const profilController = require('../../controller/profil/profil')
const absenSiswaController = require('../../controller/siswa/absensiswa')

// validation
const { checkSchema } = require('express-validator')
const validate = require('../../validation/login/loginVal').validate
const siswaSchema = require('../../validation/siswa/siswa').siswaSchema
const ortuSchema = require('../../validation/ortu/ortu').ortuSchema
const pegawaiSchema = require('../../validation/pegawai/pegawai').pegawaiSchema
const absenSiswaSchema = require('../../validation/siswa/absensiswa').absenSiswaSchema

// routing
// siswa
router.post("/siswa", validate(checkSchema(siswaSchema)), siswaController.Create)
router.get("/siswa", siswaController.Read)
router.get("/siswa/:id", siswaController.Show)
router.put("/siswa/:id", validate(checkSchema(siswaSchema)), siswaController.Update)
router.delete("/siswa/:id", siswaController.Delete)

// absensi siswa
router.post("/absensi/siswa", multer({ storage }).single('foto'), validate(checkSchema(absenSiswaSchema)), absenSiswaController.Create)

// ortu
router.post("/ortu", validate(checkSchema(ortuSchema)), ortuController.Create)
router.get("/ortu", ortuController.Read)
router.get("/ortu/:id", ortuController.Show)
router.put("/ortu/:id", validate(checkSchema(ortuSchema)), ortuController.Update)
router.delete("/ortu/:id", ortuController.Delete)

// pegawai
router.post("/pegawai", validate(checkSchema(pegawaiSchema)), pegawaiController.Create)
router.put("/pegawai/:id", validate(checkSchema(pegawaiSchema)), pegawaiController.Update)
router.get("/pegawai", pegawaiController.Read)
router.get("/pegawai/:id", pegawaiController.Show)
router.delete("/pegawai/:id", pegawaiController.Delete)
router.get('/guru', pegawaiController.Guru)
router.get('/staff', pegawaiController.Staff)
router.get('/user/:id', pegawaiController.Profil)

// profil
router.get("/", tokenVerify, profilController.Profil)

module.exports = router