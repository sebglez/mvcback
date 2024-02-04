const { DataTypes } = require("sequelize");

const defineUser = (sequelize) => {
  return sequelize.define(
    "user",
    {
      fullname: { type: DataTypes.STRING(50), allowNull: false },
      role: {
        field: "user_role",
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: { type: DataTypes.STRING(128), allowNull: false },
    },
    { tableName: "user", timestamps: false }
  );
};

module.exports = defineUser;
