const userRouter = require("express").Router();
const {
  createUser,
  loginUser,
  getUsers,
  getUserById,
  getProfile,
  updateUser,
} = require("../controllers/user");

// Rutas para la creación y obtención de usuarios
userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/profile/:id?", getProfile);

userRouter.get("/:id", getUserById); // Ruta para obtener un usuario por ID

// Rutas relacionadas con el perfil del usuario
userRouter.get("/login/:id", loginUser); // Ruta para el inicio de sesión
userRouter.patch("/profile/:id", updateUser);
module.exports = userRouter;
