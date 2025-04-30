const addReqProp = (req, res, next) => {
    req.user = "Guest";
    next();
}

module.exports = addReqProp;