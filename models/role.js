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

  return Role
}