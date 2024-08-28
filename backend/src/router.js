const express = require('express');

const router = express.Router();

const charactersController = require('./controllers/charactersController');
const characterValidate = require('./middlewares/characterValidate');

router.get('/characters', charactersController.getAll);
router.post('/characters', characterValidate.validateBody, charactersController.createCharacter);
router.delete('/characters/:id', charactersController.deleteCharacter);
router.put('/characters/:id', characterValidate.validateBody, charactersController.updateCharacter);

module.exports = router;