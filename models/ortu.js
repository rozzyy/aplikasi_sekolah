'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ortu = sequelize.define("Ortu", {
    nama: DataTypes.STRING,
    tahun_lahir: DataTypes.DATE,
    pendidikan: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    penghasilan: DataTypes.STRING,
    nik: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    paranoid: true
  })

  return Ortu
}