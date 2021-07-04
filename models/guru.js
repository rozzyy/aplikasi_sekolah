'use strict';

module.exports = (sequelize, DataTypes) => {
  const Guru = sequelize.define("Guru", {
    nama: DataTypes.STRING,
    nuptk: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    tmpt_lahir: DataTypes.STRING,
    tgl_lahir: DataTypes.DATE,
    nip: DataTypes.STRING,
    status_pegawai: DataTypes.STRING,
    jenis_ptk: DataTypes.STRING,
    agama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kodepos: DataTypes.STRING,
    telepon: DataTypes.STRING,
    hp: DataTypes.STRING,
    email: DataTypes.STRING,
    sk_cpns: DataTypes.STRING,
    tgl_sk: DataTypes.DATE,
    golongan: DataTypes.STRING,
    nama_ibu: DataTypes.STRING,
    status: DataTypes.STRING,
    nik: DataTypes.STRING,
    no_kk: DataTypes.STRING
  }, {
    paranoid: true
  })

  return Guru
}