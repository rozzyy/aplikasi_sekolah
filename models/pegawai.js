'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pegawai = sequelize.define("Pegawai", {
    nama: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    tmpt_lahir: DataTypes.STRING,
    tgl_lahir: DataTypes.DATE,
    nip: DataTypes.STRING,
    nik: DataTypes.STRING,
    jabatan: DataTypes.STRING,
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

  return Pegawai
}