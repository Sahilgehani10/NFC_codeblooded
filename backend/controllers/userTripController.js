const ErrorHandler = require("../utils/errorhandling")
const catchAsyncErrors = require("../Middleware/catchAsyncError");
const Trip = require("../models/tripModel")

exports.startTrip = catchAsyncErrors(async(req,res,next)=>{

    const {sourceDestination,finalDestination}=req.body
    const {name,_id} = req.user

    const trip = await Trip.create({user:{name,_id},sourceDestination,finalDestination})

    res.status(200).json({
        success:true,
        trip
    })
})

exports.joinTrip = catchAsyncErrors(async(req,res,next)=>{

    const {finalDestination} = req.body

    const trip = await Trip.find(finalDestination)

    if(!trip){
        return next(new ErrorHandler("No rides available",400))
    }

    res.status(200).json({
        success:true,
        trip
    })

})