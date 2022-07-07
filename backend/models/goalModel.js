module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define("goal", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // This is a reference to another model
        model: "users", // table_name
        // This is the column name of the referenced model
        key: "id",
      },
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Goal;
};
