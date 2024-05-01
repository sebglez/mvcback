const admin = require("firebase-admin");
const CONFIG = require("./config");

const firebase = admin.initializeApp({
  credential: admin.credential.cert(CONFIG.FIREBASE),
});

module.exports = firebase;
