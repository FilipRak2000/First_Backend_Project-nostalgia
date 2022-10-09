const User = require("../db/models/user")



module.exports = function (req, res, next){
    if(!req.session.user.isadmin){
        res.redirect('/signin')
    }
    next();
};