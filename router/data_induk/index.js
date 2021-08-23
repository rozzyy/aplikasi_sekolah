const express = require('express')
const router = express.Router()

// controller
const jabatanController = require('../../controller/data_induk/jabatan')
const jenisTinggalController = require('../../controller/data_induk/jenis_tinggal')
const jurusanController = require('../../controller/data_induk/jurusan')
const kelasController = require('../../controller/data_induk/kelas')
const rombelController = require('../../controller/data_induk/rombel')
const lembagaController = require('../../controller/data_induk/lembaga')
const ptkController = require('../../controller/data_induk/ptk')
const statusKawinController = require('../../controller/data_induk/status_kawin')
const sumberGajiController = require('../../controller/data_induk/sumber_gaji')
const transportasiController = require('../../controller/data_induk/transportasi')
const tugasController = require('../../controller/data_induk/tugas')
const jadwalController = require('../../controller/data_induk/jadwal')
const sekolahController = require('../../controller/sekolah/sekolah')
const ruanganController = require('../../controller/sekolah/ruangan')
const tingkatanController = require('../../controller/data_induk/tingkatan')
const tahunAjaranController = require('../../controller/data_induk/tahun_ajaran')

// validation
const { checkSchema } = require('express-validator')
const validate = require('../../validation/login/loginVal').validate

// jabatan validation
const jabatanSchema = require('../../validation/data_induk/jabatan').jabatanSchema
const jenisTinggalSchema = require('../../validation/data_induk/jenis_tinggal').jenisTinggalSchema
const jurusanSchema = require('../../validation/data_induk/jurusan').jurusanSchema
const kelasSchema = require('../../validation/data_induk/kelas').kelasSchema
const rombelSchema = require('../../validation/data_induk/rombel').rombelSchema
const lembagaSchema = require('../../validation/data_induk/lembaga').lembagaSchema
const ptkSchema = require('../../validation/data_induk/ptk').ptkSchema
const statusKawinSchema = require('../../validation/data_induk/status_kawin').statusKawinSchema
const sumberGajiSchema = require('../../validation/data_induk/sumber_gaji').sumberGajiSchema
const transportasiSchema = require('../../validation/data_induk/transportasi').transportasiSchema
const tugasSchema = require('../../validation/data_induk/tugas').tugasSchema
const jadwalSchema = require('../../validation/data_induk/jadwal').jadwalSchema
const sekolahSchema = require('../../validation/sekolah/sekolah').sekolahSchema
const ruanganSchema = require('../../validation/sekolah/ruangan').ruanganSchema
const tahunAjaranSchema = require('../../validation/data_induk/tahun_ajaran').tahunAjaranSchema

// routing 
// jabatan
router.post("/jabatan", validate(checkSchema(jabatanSchema)), jabatanController.Create)

// sekolah
router.post("/sekolah", validate(checkSchema(sekolahSchema)), sekolahController.Create)
router.put("/sekolah/:id", validate(checkSchema(sekolahSchema)), sekolahController.Update)
router.get("/sekolah", sekolahController.Read)
router.get("/sekolah/:id", sekolahController.Show)
router.delete("/sekolah/:id", sekolahController.Delete)

// ruangan
router.post("/ruangan", validate(checkSchema(ruanganSchema)), ruanganController.Create)
router.put("/ruangan/:id", validate(checkSchema(ruanganSchema)), ruanganController.Update)
router.get("/ruangan", ruanganController.Read)
router.get("/ruangan/:id", ruanganController.Read)
router.delete("/ruangan/:id", ruanganController.Delete)

// jenis tinggal
router.post("/jenis-tinggal", validate(checkSchema(jenisTinggalSchema)), jenisTinggalController.Create)

// jurusan
router.post("/jurusan", validate(checkSchema(jurusanSchema)), jurusanController.Create)
router.put("/jurusan/:id", validate(checkSchema(jurusanSchema)), jurusanController.Update)
router.get('/jurusan', jurusanController.Read)
router.get('/jurusan/:id', jurusanController.Show)
router.delete('/jurusan/:id', jurusanController.Delete)

// kelas
router.post("/kelas", validate(checkSchema(kelasSchema)), kelasController.Create)
router.get('/kelas', kelasController.Read)
router.get('/kelas/options', kelasController.Options)

// rombel
router.post("/rombel", validate(checkSchema(rombelSchema)), rombelController.Create)

// lembaga
router.post("/lembaga", validate(checkSchema(lembagaSchema)), lembagaController.Create)

// ptk
router.post("/ptk", validate(checkSchema(ptkSchema)), ptkController.Create)

// status kawin
router.post("/status-kawin", validate(checkSchema(statusKawinSchema)), statusKawinController.Create)

// sumber gaji
router.post("/sumber-gaji", validate(checkSchema(sumberGajiSchema)), sumberGajiController.Create)

// transportasi
router.post("/transportasi", validate(checkSchema(transportasiSchema)), transportasiController.Create)

// tugas
router.post("/tugas", validate(checkSchema(tugasSchema)), tugasController.Create)

// jadwal
router.post("/jadwal", validate(checkSchema(jadwalSchema)), jadwalController.Create)
router.put("/jadwal/:id", validate(checkSchema(jadwalSchema)), jadwalController.Update)
router.get("/jadwal", jadwalController.Read)
router.get("/jadwal/:id", jadwalController.Show)
router.delete("/jadwal/:id", jadwalController.Delete)

// tahun ajaran
router.post("/tahun-ajaran", validate(checkSchema(tahunAjaranSchema)), tahunAjaranController.Create)
router.put("/tahun-ajaran/:id", validate(checkSchema(tahunAjaranSchema)), tahunAjaranController.Update)
router.get("/tahun-ajaran", tahunAjaranController.Read)
router.get("/tahun-ajaran/:id", tahunAjaranController.Show)
router.delete("/tahun-ajaran/:id", tahunAjaranController.Delete)

// tingkatan
router.get("/tingkatan", tingkatanController.Read)

module.exports = router