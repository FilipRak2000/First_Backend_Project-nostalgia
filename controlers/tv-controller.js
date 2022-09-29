const Problem = require("../db/models/problem")


class TvController{
    showTv(req,res){
        res.render("pages/tv", {
         
        })
 }
 async createProblem(req,res){
    const problem = new Problem({
         type: "TV",
         city: req.body.miasto,
         adres: req.body.adres,
         problem: req.body.problem,
         image: req.file.filename,
    });
    await problem.save()
    res.redirect("/")
}

};
 
 module.exports = new TvController()