'use strict';

module.exports = (sequelize, DataTypes) => {
  const Kelas = sequelize.define("Kelas", {
    nama: DataTypes.STRING,
    jurusanId: DataTypes.INTEGER,
    tingkatanId: DataTypes.INTEGER
  }, {
    paranoid: true
  })

  Kelas.associate = function(models) {
    Kelas.belongsTo(models.Jurusan, {
      foreignKey: 'jurusanId'
    })

    Kelas.belongsTo(models.Tingkatan, {
      foreignKey: 'tingkatanId'
    })
  }

  return Kelas
}