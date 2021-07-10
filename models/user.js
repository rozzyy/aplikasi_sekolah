'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    no_induk: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    paranoid: true
  })

  User.associate = function(models) {
    User.belongsTo(models.Role, {
      foreignKey: "roleId",
      as: "role"
    })
  }

  return User
}