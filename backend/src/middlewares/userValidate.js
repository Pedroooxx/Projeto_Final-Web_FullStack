const userValidate = (req, res, next) => {

    const { body } = req;

    if (body.username == undefined || body.username == '') {
       return res.status(400).json({message: "Nome de Usuário é necessário."})
    }
    if (body.password == undefined || body.password == '') {
        return res.status(400).json({message: "Senha de Usuário é necessário."})
    }

    next();
};

module.exports = {
    userValidate,
}