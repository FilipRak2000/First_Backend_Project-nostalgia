const Problem = require("../db/models/problem")


class InternetController{
    showInternet(req,res){
         res.render("pages/internet", {
         
         })
 }
 async createProblem(req,res){
    const problem = new Problem({
         type: "Internet",
         city: req.body.miasto,
         adres: req.body.adres,
         problem: req.body.problem,
         image: req.file.filename, 
    });
    await problem.save()
    res.redirect("/")
}

};
 
 module.exports = new InternetController()