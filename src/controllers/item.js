const { QueryTypes } = require("sequelize");
const { Item, sequelize } = require("../models");

const createItem = async (req, res) => {
  const { title, genre, age, description, price, stock, src } = req.body;
  await Item.create({ title, genre, age, description, price, stock, src });
  return res.json({ message: "NEW ITEM CREATED!" });
};

const getItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findOne({ where: { id } });
  return res.json({ item });
};

const getItems = async (req, res) => {
  const items = await Item.findAll();
  return res.json({ items });
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  await Item.destroy({ where: { id } });
  return res.json({ message: "DELETED ITEM!" });
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { title, genre, age, description, price, stock, src } = req.body;
  await Item.update(
    { title, genre, age, description, price, stock, src },
    { where: { id } }
  );
  const newItem = await Item.findOne({ where: { id } });
  return res.json({ newItem });
};

module.exports = { createItem, getItem, getItems, deleteItem, updateItem };

// title: { type: DataTypes.STRING(128), allowNull: false },
// genre: { type: DataTypes.STRING(128), allowNull: false },
// age: { type: DataTypes.INTEGER, allowNull: false },
// description: { type: DataTypes.STRING(256), allowNull: true },
// price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
// stock: { type: DataTypes.INTEGER, allowNull: false },
// src: { type: DataTypes.STRING(256), allowNull: true },S
