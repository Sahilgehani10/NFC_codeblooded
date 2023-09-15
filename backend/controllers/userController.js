const ErrorHandler = require("../utils/errorhandling")
const catchAsyncErrors = require("../Middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/getToken");

//Register a User

exports.registerUser = catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password} = req.body;

    const user = await User.create({name,email,password});

    sendToken(user,201,res)
    
});

exports.loginUser = catchAsyncErrors(async (req,res,next)=>{

    const {email,password} = req.body

    //Checking if the email and password both are given or not

    if(!email || !password){
        return(next(new ErrorHandler("Please enter Email and Password"),400))
    }

    const user = await User.findOne({email}).select("+password")

    if(!user){
        return new ErrorHandler("Invalid User or password",401)
    }

    const isPasswordMatched = await user.comparePassword(password)

    if(!isPasswordMatched){
        return new ErrorHandler("Invalid User or password",401)
    }

    sendToken(user,200,res)

});

//Logout user

exports.logout = catchAsyncErrors(async(req,res,next)=>{

    res.cookie("token", null,{
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success:true,
        message:"Logged Out"
    })
});