module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    nama: DataTypes.STRING,
    no_induk: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    paranoid: true
  })

  return User
}