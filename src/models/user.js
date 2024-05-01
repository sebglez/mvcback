const { DataTypes } = require("sequelize");

const defineUser = (sequelize) => {
  return sequelize.define(
    "user",
    {
      uid: { type: DataTypes.STRING(255), allowNull: false },

      fullname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      role: {
        field: "user_role",
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: { type: DataTypes.STRING(128), allowNull: false },
      profileImg: {
        field: "profile_img",
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    { tableName: "user", timestamps: false }
  );
};

module.exports = defineUser;
