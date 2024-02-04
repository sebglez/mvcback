const { DataTypes } = require("sequelize");

const defineItem = (sequelize) => {
  return sequelize.define(
    "item",
    {
      title: { type: DataTypes.STRING(128), allowNull: false },
      genre: { type: DataTypes.STRING(128), allowNull: false },
      age: { type: DataTypes.INTEGER, allowNull: false },
      description: { type: DataTypes.STRING(256), allowNull: true },
      price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      stock: { type: DataTypes.INTEGER, allowNull: false },
      src: { type: DataTypes.STRING(256), allowNull: true },
    },
    { tableName: "item", timestamps: false }
  );
};

module.exports = defineItem;
