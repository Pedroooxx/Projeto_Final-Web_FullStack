const characterModel = require("../models/characterModel");
const logger = require('../config/logger');

const getAll = async (_req, res) => {
  try {
    const gotcharacters = await characterModel.getAll();
    return res.status(200).json(gotcharacters);
  } catch (error) {
    logger.error(`Error getting all characters: ${error.message}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await characterModel.getCharacter(id);
    return res.status(200).json(character);
  } catch (error) {
    logger.error(`Error getting character with ID ${id}: ${error.message}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createCharacter = async (req, res) => {
  try {
    const createdCharacter = await characterModel.createCharacter(req.body);
    return res.status(201).json(createdCharacter);
  } catch (error) {
    logger.error(`Error creating character: ${error.message}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    await characterModel.deleteCharacter(id);
    return res.status(204).json();
  } catch (error) {
    logger.error(`Error deleting character with ID ${id}: ${error.message}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    await characterModel.updateCharacter(id, req.body);
    return res.status(204).json();
  } catch (error) {
    logger.error(`Error updating character with ID ${id}: ${error.message}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAll,
  getCharacter,
  createCharacter,
  deleteCharacter,
  updateCharacter,
};
