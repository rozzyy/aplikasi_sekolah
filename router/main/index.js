const express = require('express')
const router = express.Router()
const tokenVerify = require('../../middleware/auth/auth')

// controller
const siswaController = require('../../controller/siswa/siswa')
const ortuController = require('../../controller/ortu/ortu')
const pegawaiController = require('../../controller/pegawai/pegawai')
const profilController = require('../../controller/profil/profil')

// validation
const { checkSchema } = require('express-validator')
const validate = require('../../validation/login/loginVal').validate
const siswaSchema = require('../../validation/siswa/siswa').siswaSchema
const ortuSchema = require('../../validation/ortu/ortu').ortuSchema
const pegawaiSchema = require('../../validation/pegawai/pegawai').pegawaiSchema

// routing
// siswa
router.post("/siswa", validate(checkSchema(siswaSchema)), siswaController.Create)
router.get("/siswa", siswaController.Read)
router.get("/siswa/:id", siswaController.Show)
router.put("/siswa/:id", validate(checkSchema(siswaSchema)), siswaController.Update)
router.delete("/siswa/:id", siswaController.Delete)

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
router.get("/pegawai/:id", pegawaiController.Read)
router.delete("/pegawai/:id", pegawaiController.Delete)

// profil
router.get("/", tokenVerify, profilController.Profil)

module.exports = router