const mongoose = require("mongoose");
const validator =require("validator");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config({path: "backend/config/config.env"})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
        maxLength:[30,"Name cannot exceed 30 characters"],
        minLength:[4,"Name should have 4 or more characters"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid Email"]
    },
    mobNo:{
        type:Number,
        required:true,
        maxLength:[10, "Number cannot exceed 10 digits"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[8,"Password should atleast contain 8 characters"],
        select:false,
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire: Date,
})

userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password,10)
});

//JWT Token

userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE
    })
};

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}


userSchema.methods.getResetPasswordToken = function (){

    //Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");

    //Hashing and adding to user schema

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

    //Reset password expire

    this.resetPasswordExpire = Date.now() + 15*60*1000

    return resetToken;
}

module.exports = mongoose.model("User", userSchema)