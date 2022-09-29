const Problem = require("../db/models/problem")

class AdminController{
    async showAdmin(req,res){
        const { q } = req.query;
        let problems = await Problem.find({ type: {$regex: q || "", $options: 'i'}});
        console.log(problems)
        res.render("pages/admin", {
        problems
        });
    }

}


    module.exports = new AdminController()