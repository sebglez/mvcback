const {
  createItem,
  getItem,
  getItems,
  deleteItem,
  updateItem,
} = require("../controllers/item");

const itemRouter = require("express").Router();

itemRouter.post("/", createItem);
itemRouter.get("/", getItems);
itemRouter.get("/:id", getItem);
itemRouter.delete("/:id", deleteItem);
itemRouter.patch("/:id", updateItem);

module.exports = itemRouter;
 