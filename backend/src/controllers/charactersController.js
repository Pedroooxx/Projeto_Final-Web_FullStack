const characterModel = require("../models/characterModel");

const getAll = async (_req, res) => {
  const gotcharacters = await characterModel.getAll();
  return res.status(200).json(gotcharacters);
};

const getCharacter = async (req, res) => {
  const { id } = req.params;
  const character = await characterModel.getCharacter(id);
  return res.status(200).json(character);
};

const createCharacter = async (req, res) => {
  const createdCharacter = await characterModel.createCharacter(req.body);
  return res.status(201).json(createdCharacter);
};

const deleteCharacter = async (req, res) => {
  const { id } = req.params;
  await characterModel.deleteCharacter(id);
  return res.status(204).json();
};

const updateCharacter = async (req, res) => {
  const { id } = req.params;
  await characterModel.updateCharacter(id, req.body);
  res.status(204).json();
};

module.exports = {
  getAll,
  getCharacter,
  createCharacter,
  deleteCharacter,
  updateCharacter,
};
