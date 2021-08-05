'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sekolah = sequelize.define("Sekolah", {
    jenjang: DataTypes.STRING,
    nama: DataTypes.STRING,
    notelepon: DataTypes.STRING,
    web: DataTypes.STRING,
    email: DataTypes.STRING,
    alamat: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kabkota: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    dusun: DataTypes.STRING,
    rt_rw: DataTypes.STRING,
    tgl_berdiri: DataTypes.DATE,
    akreditas: DataTypes.STRING,
    kurikulum: DataTypes.STRING,
    npsn: DataTypes.STRING,
    luas_tanah: DataTypes.STRING,
    status_bos: DataTypes.BOOLEAN,
    penyelenggaraan: DataTypes.STRING,
    jam_masuk: DataTypes.STRING,
    jam_pulang: DataTypes.STRING,
    lama_belajar: DataTypes.STRING,
    internet: DataTypes.BOOLEAN,
    perpustakaan: DataTypes.BOOLEAN,
    batas_spp: DataTypes.STRING
  }, {
    paranoid: true
  })

  return Sekolah
}