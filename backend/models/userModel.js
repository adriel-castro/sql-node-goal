module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: [false, "Please add a name"],
    },
    email: {
      type: DataTypes.STRING,
      allowNull: [false, "Please add a email"],
    },
    password: {
      type: DataTypes.STRING,
      allowNull: [false, "Please add a password"],
    },
  });

  return User;
};
