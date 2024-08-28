const validateBody = (req, res, next) => {

    const { body } = req;

    if (body.name == undefined || body.name == '') {
       return res.status(400).json({message: "Characters 'name' is required."})
    }
    if (body.fullname == undefined || body.fullname == '') {
        return res.status(400).json({message: "Characters 'fullname' is required."})
    }
    if (body.house == undefined || body.house == '') {
        return res.status(400).json({message: "Characters 'house' is required."})
    }
    if (body.status == undefined || body.status == '') {
        return res.status(400).json({message: "Characters 'status' is required."})
    }

    next();
};

module.exports = {
    validateBody
}