const express = require("express")
const router = new express.Router()
const ElectricityController = require('../controlers/electricity-controller.js')
const TvController = require('../controlers/tv-controller.js')
const InternetController = require('../controlers/internet-controller')
const OthersController = require('../controlers/others-controller')
const UserController = require('../controlers/user-controller')
const HomeController = require('../controlers/home-controller')
const AdminController = require('../controlers/admin-controller')
const User = require("../db/models/user.js")
const path = require('path')
const multer = require("multer")
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/uploads/" )
    },

    filename: function(req, file, cb){
    const name =  Date.now() + path.extname(file.originalname);
    console.log(file)
    cb(null, name);
    }

});
const upload = multer({storage})


router.get("/", HomeController.showHome )

router.get("/electricity", ElectricityController.showPrad)
router.post("/electricity", upload.single('image'), ElectricityController.createProblem)

router.get("/tv", TvController.showTv);
router.post("/tv", upload.single('image'), TvController.createProblem);

router.get("/internet", InternetController.showInternet);
router.post("/internet", upload.single('image'), InternetController.createProblem);

router.get("/others", OthersController.showOthers);
router.post("/others", upload.single('image'), OthersController.createProblem);

router.get("/admin", AdminController.showAdmin)


router.get("/login", UserController.showSignin);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout )

router.get("/register", UserController.showRegister);
router.post("/register", UserController.register);

module.exports = router
