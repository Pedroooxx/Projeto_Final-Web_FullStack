const userValidate = (req, res, next) => {

    const { body } = req;

    if (body.username == undefined || body.username == '') {
       return res.status(400).json({message: "Characters 'username' is required."})
    }
    if (body.password == undefined || body.password == '') {
        return res.status(400).json({message: "Characters 'password' is required."})
    }

    next();
};

module.exports = {
    userValidate,
}