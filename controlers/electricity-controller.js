const Problem = require("../db/models/problem")


class ElectricityController{
   showPrad(req,res){
        res.render("pages/electricity", {
       
        })
}
async createProblem(req,res){
        const problem = new Problem({
             type: "Electricity",   
             city: req.body.miasto,
             adres: req.body.adres,
             problem: req.body.problem,
             image: req.file.filename,
        });
        await problem.save()
        res.redirect("/")
}

};

module.exports = new ElectricityController()