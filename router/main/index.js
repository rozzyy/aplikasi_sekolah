const express = require('express')
const router = express.Router()

// controller
const siswaController = require('../../controller/siswa/siswa')
const ortuController = require('../../controller/ortu/ortu')
const pegawaiController = require('../../controller/pegawai/pegawai')

// validation
const { checkSchema } = require('express-validator')
const validate = require('../../validation/login/loginVal').validate
const siswaSchema = require('../../validation/siswa/siswa').siswaSchema
const ortuSchema = require('../../validation/ortu/ortu').ortuSchema
const pegawaiSchema = require('../../validation/pegawai/pegawai').pegawaiSchema

// routing
// siswa
router.post("/siswa", validate(checkSchema(siswaSchema)), siswaController.Create)

// ortu
router.post("/ortu", validate(checkSchema(ortuSchema)), ortuController.Create)

// pegawai
router.post("/pegawai", validate(checkSchema(pegawaiSchema)), pegawaiController.Create)

module.exports = router