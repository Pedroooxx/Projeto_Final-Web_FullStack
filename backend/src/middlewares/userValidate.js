const userModel = require('../models/userModel');

const validateBody = async (req, res, next) => {
    const { body } = req;

    if (body.username == undefined || body.username == '') {
        return res.status(400).json({ message: "User 'username' is required." });
    }
    if (body.password == undefined || body.password == '') {
        return res.status(400).json({ message: "User 'password' is required." });
    }

    const usernameExists = await userModel.isUsernameTaken(body.username);
    if (usernameExists) {
        return res.status(400).json({ message: "Username is already taken." });
    }

    next();
};

module.exports = {
    validateBody,
};