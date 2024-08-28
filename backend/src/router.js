const express = require('express');

const router = express.Router();

const charactersController = require('./controllers/charactersController');
const characterValidate = require('./middlewares/characterValidate');

router.get('/characters', charactersController.getAll);
router.post('/characters', characterValidate.validateBody, charactersController.createCharacter);
router.delete('/characters/:id', charactersController.deleteCharacter);
router.put('/characters/:id', characterValidate.validateBody, charactersController.updateCharacter);

const userController = require('./controllers/userController');
const userValidate = require('./middlewares/userValidate');

router.get('/login', userController.getAll);
router.post('/login', userValidate.validateBody, userController.createUser);
router.delete('/login/:id', userController.deleteUser);
router.put('/login/:id', userValidate.validateBody, userController.updateUser);

module.exports = router;