const User = require("../db/models/user")


class UserController{
    showRegister(req,res){
        res.render("pages/signup", {
        });
 }

 async register(req,res){
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });

    try{
        await user.save();
        res.redirect('/signin');
    }catch(e){
        res.render("pages/signup",{
            errors: e.errors,
            form: req.body
        });
        
    }
 }

 showSignin(req,res){
    res.render("pages/signin", {
     
    })
}

async login(req, res){
    try {
        const user = await User.findOne({email: req.body.email });
        if (!user){
            throw new Error ("user not found")
        }

        const isValidPassword = user.comparePassword(req.body.password);
        if(!isValidPassword){
            throw new Error ("password not valid")
        }
    req.session.user = {
        _id: user._id,
        email: user.email,
        isadmin: user.isAdmin,

    };
    res.redirect('/')
    }catch(e){
        res.render('pages/signin')
        console.log(e)

    }
}

logout(req, res){
    req.session.destroy()
    res.redirect("/")
}



};
 
 module.exports = new UserController()

