const connection = require('./connection');

const getAll = async () => {
    const gotcharacters = await connection.execute('SELECT * FROM gotcharacters');
    return gotcharacters[0];
};

const createCharacter = async (gotcharacter) => {
    const { name, fullname, house, status } = gotcharacter;
    const query = 'INSERT INTO gotcharacters(name, fullname, house, status) VALUES (?, ?, ?, ?)';
    const [createdCharacter] = await connection.execute(query, [name, fullname, house, status]);
    return {insertId: createdCharacter.insertId};
}

const deleteCharacter = async (id) => {
    const removedCharacter = await connection.execute('DELETE FROM gotcharacters WHERE id = ?', [id]);
    return removedCharacter;
};

const updateCharacter = async (id, gotcharacter) => {
    const { name, fullname, house, status } = gotcharacter;
    const query = 'UPDATE gotcharacters SET name = ?, fullname = ?, house = ?, status = ? WHERE id = ?';
    const updatedCharacter = await connection.execute(query, [name, fullname, house, status, id]);
    return updatedCharacter;
};

module.exports = {
    getAll,
    createCharacter,
    deleteCharacter,
    updateCharacter,
};