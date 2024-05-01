const firebase = require("../firebase");
const { User } = require("../models");

const createUser = async (req, res) => {
  try {
    const { uid, fullname, email } = req.body;
    if (!fullname || !email) {
      return res
        .status(400)
        .json({ error: "Full name and email are required" });
    }

    const profileImg = `https://i.pravatar.cc/150?u=${email}`;
    await User.create({ uid, fullname, email, profileImg, role: "user" });
    return res.json({ message: "NEW USER CREATED!" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const token = req.headers?.authorization?.slice(7);
    const validToken = await firebase.auth().verifyIdToken(token);
    console.log(validToken);

    // Obtener el UID del usuario del token de autenticación
    const uid = validToken.uid;

    // Buscar al usuario por UID en la base de datos
    const user = await User.findOne({ where: { uid: uid } }); // Utiliza una cláusula "where" para filtrar por UID
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({ user });
  } catch (error) {
    console.error("Error getting user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getUsers = async (req, res) => {
  try {
    // Obtener todos los usuarios de la base de datos
    const users = await User.findAll();

    return res.json({ users });
  } catch (error) {
    console.error("Error getting users:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json({ user });
  } catch (error) {
    console.error("Error getting user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
const getProfile = async (req, res) => {
  try {
    const token = req.headers?.authorization?.slice(7);
    const validToken = await firebase.auth().verifyIdToken(token);
    console.log(validToken);

    // Obtener el UID del usuario del token de autenticación
    const uid = validToken.uid;

    // Buscar al usuario por UID en la base de datos
    const user = await User.findOne({ where: { uid: uid } }); // Utiliza una cláusula "where" para filtrar por UID
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({ user });
  } catch (error) {
    console.error("Error getting user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { fullname, email, profileImg } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Actualizar solo los campos que se proporcionan en el cuerpo de la solicitud
    if (fullname) {
      user.fullname = fullname;
    }
    if (email) {
      user.email = email;
    }
    if (profileImg) {
      user.profileImg = profileImg;
    }

    // Guardar los cambios en la base de datos
    await user.save();

    // Obtener el usuario actualizado de la base de datos
    const updatedUser = await User.findByPk(id);

    return res.json({ user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createUser,
  loginUser,
  getUsers,
  getUserById,
  getProfile,
  updateUser,
};
