const { QueryTypes } = require("sequelize");
const { Item, sequelize } = require("../models");

const createItem = async (req, res) => {
  const { title, genre, age, description, price, stock, src } = req.body;
  await Item.create({ title, genre, age, description, price, stock, src });
  return res.json({ message: "NEW ITEM CREATED!" });
};

const getItem = async (req, res) => {
  const { id } = req.params;
  console.log("ID recibido:", id);
  const item = await Item.findOne({ where: { id } });
  console.log("Item encontrado:", item);
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
  const updateItem = {};
  if (title) {
    updateItem.title = title;
  }
  if (genre) {
    updateItem.genre = genre;
  }
  if (age) {
    updateItem.age = age;
  }
  if (description) {
    updateItem.description = description;
  }
  if (price) {
    updateItem.price = price;
  }
  if (stock) {
    updateItem.stock = stock;
  }
  if (src) {
    updateItem.src = src;
  }

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
