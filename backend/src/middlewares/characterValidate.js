const validateBody = (req, res, next) => {

    const { body } = req;

    if (body.name == undefined || body.name == '') {
       return res.status(400).json({message: "Nome do Personagem necessário."})
    }
    if (body.fullname == undefined || body.fullname == '') {
        return res.status(400).json({message: "Nome completo do Personagem necessário."})
    }
    if (body.house == undefined || body.house == '') {
        return res.status(400).json({message: "Casa do Personagem necessária."})
    }
    if (body.status == undefined || body.status == '') {
        return res.status(400).json({message: "Status do Personagem necessário."})
    }

    next();
};

module.exports = {
    validateBody
}