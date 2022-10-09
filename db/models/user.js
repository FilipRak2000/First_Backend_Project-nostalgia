const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")


const userSchema = new Schema({

    email:{
        type: String,
        required: [true, 'Email required'],
        lowercase:true,
        unique:true,
        trim:true,
        min: 10,
        max: 100,
    },

    password:{
        type: String,
        required: true,
        min: 4,
        max: 100,
    },

    date:{
        type: Date,
        default: Date.now,
    },

    isAdmin:{
        type:Boolean,
        default: false,
    }

});

userSchema.pre('save', function(next){
     const user = this;
      if (!user.isModified('password')) { return next(); }
     else { const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash; next(); } });

    userSchema.methods ={
        comparePassword(password){
            return bcrypt.compareSync(password, this.password)
        }
    }


const User = mongoose.model('User', userSchema )

module.exports = User;