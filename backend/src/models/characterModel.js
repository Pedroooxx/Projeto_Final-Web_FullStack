const { createClient } = require("@redis/client");
const connection = require("./connection");

// Cria e configura o cliente Redis
const redisClient = createClient({
  url: "redis://localhost:6379",
});

redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

redisClient.connect();

// Define o tempo de expiração do cache (em segundos)
const CACHE_EXPIRATION = 3600; // 1 hora de cache

// Função para obter todos os personagens, com cache
const getAll = async () => {
  const cacheKey = "characters:all";

  try {
    // Tenta buscar os dados no cache Redis
    const cacheData = await redisClient.get(cacheKey);

    // Se os dados estiverem no cache, retorna os dados cacheados
    if (cacheData) {
      return JSON.parse(cacheData);
    }

    // Se não, busca os dados no banco de dados
    const [gotcharacters] = await connection.execute(
      "SELECT * FROM gotcharacters"
    );

    // Armazena os dados no cache Redis
    await redisClient.setEx(
      cacheKey,
      CACHE_EXPIRATION,
      JSON.stringify(gotcharacters)
    );

    return gotcharacters;
  } catch (error) {
    console.error("Error getting characters:", error);
    throw error;
  }
};

// Função para obter um personagem pelo ID, com cache
const getCharacter = async (id) => {
  const cacheKey = `characters:${id}`;

  try {
    // Tenta buscar os dados no cache Redis
    const cacheData = await redisClient.get(cacheKey);

    // Se os dados estiverem no cache, retorna os dados cacheados
    if (cacheData) {
      return JSON.parse(cacheData);
    }

    // Se não, busca os dados no banco de dados
    const [rows] = await connection.execute(
      "SELECT * FROM gotcharacters WHERE id = ?",
      [id]
    );
    const character = rows[0];

    if (character) {
      // Armazena os dados no cache Redis
      await redisClient.setEx(
        cacheKey,
        CACHE_EXPIRATION,
        JSON.stringify(character)
      );
      return character;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting character:", error);
    throw error;
  }
};

// As outras funções permanecem inalteradas
const createCharacter = async (gotcharacter) => {
  const { name, fullname, house, status } = gotcharacter;
  const query =
    "INSERT INTO gotcharacters(name, fullname, house, status) VALUES (?, ?, ?, ?)";
  try {
    const [createdCharacter] = await connection.execute(query, [
      name,
      fullname,
      house,
      status,
    ]);

    // Limpa o cache de todos os personagens
    const cacheKeyAll = "characters:all";
    await redisClient.del(cacheKeyAll);

    return { insertId: createdCharacter.insertId };
  } catch (error) {
    console.error('Error creating character:', error);
    throw error;
  }
};

const deleteCharacter = async (id) => {
  try {
    const removedCharacter = await connection.execute(
      "DELETE FROM gotcharacters WHERE id = ?",
      [id]
    );

    // Limpa o cache do personagem específico
    const cacheKey = `characters:${id}`;
    await redisClient.del(cacheKey);

    // Limpa o cache de todos os personagens
    const cacheKeyAll = "characters:all";
    await redisClient.del(cacheKeyAll);

    return removedCharacter;
  } catch (error) {
    console.error('Error deleting character:', error);
    throw error;
  }
};

const updateCharacter = async (id, gotcharacter) => {
  const { name, fullname, house, status } = gotcharacter;
  const query =
    "UPDATE gotcharacters SET name = ?, fullname = ?, house = ?, status = ? WHERE id = ?";
  try {
    const [updatedCharacter] = await connection.execute(query, [
      name,
      fullname,
      house,
      status,
      id,
    ]);

    // Limpa o cache do personagem específico
    const cacheKey = `characters:${id}`;
    await redisClient.del(cacheKey);

    // Limpa o cache de todos os personagens
    const cacheKeyAll = "characters:all";
    await redisClient.del(cacheKeyAll);

    return updatedCharacter;
  } catch (error) {
    console.error('Error updating character:', error);
    throw error;
  }
};

module.exports = {
  getAll,
  getCharacter,
  createCharacter,
  deleteCharacter,
  updateCharacter,
};
