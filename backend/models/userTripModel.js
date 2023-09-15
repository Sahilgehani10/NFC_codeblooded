const mongoose = require("mongoose")

const userTripSchema = new mongoose.Schema({
    user: {
            type: mongoose.Schema.ObjectId,
            ref:"User",
            required:true
    },
    sourceDestination:{

    },
    finalDestination:{

    },
    tripBooked:Date.now(),
    tripStatus:{
        type:String,
        default:"Booking"
    },
    tripEndend : String,
}) 

module.exports = mongoose.model("userTrips",userTripSchema)