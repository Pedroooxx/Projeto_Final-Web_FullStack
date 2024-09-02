const { connection, redisClient } = require("./connection");
const logger = require('../config/logger');

const CACHE_EXPIRATION = 3600;

const getAll = async () => {
  const cacheKey = "characters:all";
  try {
    const cacheData = await redisClient.get(cacheKey);
    if (cacheData) {
      return JSON.parse(cacheData);
    }
    const [gotcharacters] = await connection.execute("SELECT * FROM gotcharacters");
    await redisClient.setEx(cacheKey, CACHE_EXPIRATION, JSON.stringify(gotcharacters));
    return gotcharacters;
  } catch (error) {
    logger.error(`Error getting characters: ${error.message}`);
    throw error;
  }
};

const getCharacterByName = async (name) => {
  const cacheKey = `characters:name:${name}`;
  try {
    const cacheData = await redisClient.get(cacheKey);
    if (cacheData) {
      return JSON.parse(cacheData);
    }
    const [rows] = await connection.execute("SELECT * FROM gotcharacters WHERE name = ?", [name]);
    const character = rows[0];
    if (character) {
      await redisClient.setEx(cacheKey, CACHE_EXPIRATION, JSON.stringify(character));
      return character;
    } else {
      return null;
    }
  } catch (error) {
    logger.error(`Error getting character by name: ${error.message}`);
    throw error;
  }
};

const createCharacter = async (gotcharacter) => {
  const { name, fullname, house, status } = gotcharacter;
  const query = "INSERT INTO gotcharacters(name, fullname, house, status) VALUES (?, ?, ?, ?)";
  try {
    const [createdCharacter] = await connection.execute(query, [name, fullname, house, status]);
    await redisClient.del("characters:all");
    return { insertId: createdCharacter.insertId };
  } catch (error) {
    logger.error(`Error creating character: ${error.message}`);
    throw error;
  }
};

const deleteCharacter = async (id) => {
  try {
    await connection.execute("DELETE FROM gotcharacters WHERE id = ?", [id]);
    await redisClient.del(`characters:${id}`);
    await redisClient.del("characters:all");
  } catch (error) {
    logger.error(`Error deleting character: ${error.message}`);
    throw error;
  }
};

const updateCharacter = async (id, gotcharacter) => {
  const { name, fullname, house, status } = gotcharacter;
  const query = "UPDATE gotcharacters SET name = ?, fullname = ?, house = ?, status = ? WHERE id = ?";
  try {
    await connection.execute(query, [name, fullname, house, status, id]);
    await redisClient.del(`characters:${id}`);
    await redisClient.del("characters:all");
  } catch (error) {
    logger.error(`Error updating character: ${error.message}`);
    throw error;
  }
};

module.exports = {
  getAll,
  getCharacterByName,
  createCharacter,
  deleteCharacter,
  updateCharacter,
};
