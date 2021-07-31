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
    Role.hasMany(models.User, {
      foreignKey: "roleId",
      as: "roleId"
    })
  }

  return Role
}