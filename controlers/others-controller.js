const Problem = require("../db/models/problem")


class OthersController{
    showOthers(req,res){
         res.render("pages/others", {
          
         })
 }

 async createProblem(req,res){
    const problem = new Problem({
         type: "Others",
         city: req.body.miasto,
         adres: req.body.adres,
         problem: req.body.problem,
         image: req.file.filename,
    });
    await problem.save()
    res.redirect("/")
}

};
 
 module.exports = new OthersController()