'use strict';

module.exports = (sequelize, DataTypes) => {
  const Elearning = sequelize.define("Elearning", {
    link: DataTypes.STRING,
    file: DataTypes.STRING,
    judul: DataTypes.STRING,
    mapel: DataTypes.STRING,
    tingkatanId: DataTypes.INTEGER,
    pegawaiId: DataTypes.INTEGER
  }, {
    paranoid: true
  })

  Elearning.associate = function(models) {
    Elearning.belongsTo(models.Tingkatan, {
      foreignKey: 'tingkatanId',
    })

    Elearning.belongsTo(models.Pegawai, {
      foreignKey: 'pegawaiId',
    })
  }

  return Elearning
}