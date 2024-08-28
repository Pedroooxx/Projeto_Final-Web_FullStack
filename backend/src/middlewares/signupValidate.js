const userModel = require('../models/userModel');

const signupValidate = async (req, res, next) => {
    const { body } = req;

    const usernameExists = await userModel.isUsernameTaken(body.username);
    if (usernameExists) {
        return res.status(400).json({ message: "Username is already taken." });
    }
    
    next();
};

module.exports = {
    signupValidate,
};