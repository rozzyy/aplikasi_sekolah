'use strict';

module.exports = (sequelize, DataTypes) => {
  const Tingkatan = sequelize.define("Tingkatan", {
    nama: DataTypes.STRING
  }, {
    paranoid: true
  })

  Tingkatan.associate = function(models) {
    Tingkatan.hasMany(models.Elearning, {
      foreignKey: 'tingkatanId'
    })

    Tingkatan.hasMany(models.Kelas, {
      foreignKey: 'tingkatanId'
    })
  }

  return Tingkatan
}

