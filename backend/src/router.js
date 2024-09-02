const express = require("express");
const router = express.Router();

const charactersController = require("./controllers/charactersController");
const characterValidate = require("./middlewares/characterValidate");
const authenticateToken = require("./middlewares/authenticateToken");

router.get("/characters", charactersController.getAll);
router.get("/characters/:id", charactersController.getCharacter);

router.post(
  "/characters",
  authenticateToken,
  characterValidate.validateBody,
  charactersController.createCharacter
);
router.delete(
  "/characters/:id",
  authenticateToken,
  charactersController.deleteCharacter
);
router.put(
  "/characters/:id",
  authenticateToken,
  characterValidate.validateBody,
  charactersController.updateCharacter
);

const userController = require("./controllers/userController");
const userValidate = require("./middlewares/userValidate");
const signupValidate = require("./middlewares/signupValidate");

router.post(
  "/new-user",
  userValidate.userValidate,
  signupValidate.signupValidate,
  userController.createUser
);
router.post("/login", userValidate.userValidate, userController.enterUser);

module.exports = router;