'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ortu = sequelize.define("Ortu", {
    nama: DataTypes.STRING,
    tahun_lahir: DataTypes.DATE,
    pendidikan: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    penghasilan: DataTypes.STRING,
    nik: DataTypes.STRING,
    status: DataTypes.STRING,
    alamat: DataTypes.STRING,
    no_telepon: DataTypes.STRING
  }, {
    paranoid: true
  })

  Ortu.associate = function(models) {
    Ortu.belongsTo(models.User, {
      foreignKey: "userId"
    })
    Ortu.belongsTo(models.Siswa, {
      foreignKey: "siswaId"
    })
  }

  return Ortu
}