'use strict';

module.exports = (sequelize, DataTypes) => {
  const Siswa = sequelize.define("Siswa", {
    nama: DataTypes.STRING,
    nipd: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    nisn: DataTypes.STRING,
    tmpt_lahir: DataTypes.STRING,
    tgl_lahir: DataTypes.DATE,
    nik: DataTypes.STRING,
    agama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kodepos: DataTypes.STRING,
    telepon: DataTypes.STRING,
    hp: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    paranoid: true
  })

  return Siswa
}