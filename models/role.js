'use strict'
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("Role", {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    paranoid: true
  })

  Role.associate = function(models) {
    Role.hasOne(models.Role, {
      as: "roles"
    })
  }

  return Role
}