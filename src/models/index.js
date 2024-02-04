const defineItem = require("./item");
const defineUser = require("./user");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("ecommerce", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const User = defineUser(sequelize);
const Item = defineItem(sequelize);

module.exports = { sequelize, User, Item };
