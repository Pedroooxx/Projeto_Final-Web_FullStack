const connection = require('./connection');

const getAll = async () => {
    const users = await connection.execute('SELECT * FROM users');
    return users[0];
};

const createUser = async (user) => {
    const { username, password } = user;
    const query = 'INSERT INTO users(username, password) VALUES (?, ?)';
    const [createdUser] = await connection.execute(query, [username, password]);
    return {insertId: createdUser.insertId};
}

const deleteUser = async (id) => {
    const removedUser = await connection.execute('DELETE FROM users WHERE id = ?', [id]);
    return removedUser;
};

const updateUser = async (id, user) => {
    const { username, password } = user;
    const query = 'UPDATE users SET username = ?, password = ? WHERE id = ?';
    const updatedUser = await connection.execute(query, [username, password, id]);
    return updatedUser;
};

const isUsernameTaken = async (username) => {
    const query = 'SELECT COUNT(*) AS count FROM users WHERE username = ?';
    const [rows] = await connection.execute(query, [username]);
    return rows[0].count > 0;
};

module.exports = {
    getAll,
    createUser,
    deleteUser,
    updateUser,
    isUsernameTaken,
};