'use strict';

module.exports = (sequelize, DataTypes) => {
  const AbsenGuru = sequelize.define("AbsenGuru", {
    siswa_id: DataTypes.INTEGER,
    jam_hadir: DataTypes.STRING,
    pegawai_id: DataTypes.INTEGER,
    kehadiran: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    paranoid: true
  })

  return AbsenGuru
}