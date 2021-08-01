const express = require('express')
const router = express.Router()

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
router.put("/siswa/:id", siswaController.Update)
router.delete("/siswa/:id", siswaController.Delete)

// ortu
router.post("/ortu", validate(checkSchema(ortuSchema)), ortuController.Create)

// pegawai
router.post("/pegawai", validate(checkSchema(pegawaiSchema)), pegawaiController.Create)
router.put("/pegawai/:id", validate(checkSchema(pegawaiSchema)), pegawaiController.Update)
router.get("/pegawai", pegawaiController.Read)
router.get("/pegawai/:id", pegawaiController.Read)

// profil
router.get("/:id", profilController.Profil)

module.exports = router