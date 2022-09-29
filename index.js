
const port = 3000;
const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path")
const session = require("express-session")
const ejsLint = require('ejs-lint');
const { sessionKeySecret } = require("./config")
mongoose.connect('mongodb://localhost:27017/Centrum')




app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.set('layout', './layouts/main')
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(session({
    secret: sessionKeySecret,
    saveUninitialized: true,
    cookie:{maxAge: 1000*60*60*24},
    resave:false,
}))


//mount middlewares
app.use("/", require("./middlewares/view-variables"));
app.use("/", require("./middlewares/user-middleware"))
app.use("/admin", require("./middlewares/is-admin-middleware"))
//mount routes
app.use(require('./routes/web.js'))




app.listen(port)