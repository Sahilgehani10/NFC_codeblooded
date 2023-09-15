const mongoose = require("mongoose")

const tripSchema = new mongoose.Schema({
    user:{
       name:{
        type:String,
        required:true
       },
       _id:{
        type:String,
        required:true
       }
    },
    sourceDestination:{
        type:String,
        required:true
    },
    halts:[
        
    ],
    finalDestination:{
        type:String,
        required:true
    },
    tripBooked:{
        type:String,
        default:`${Date().toLocaleString()}`
    },
    tripStatus:{
        type:String,
        default:"Booked"
    },
    tripEndend : String,
    noOfPass:{
        type:Number,
        default:1
    },
    maxPass:{
        type:Number,
        default:3
    }
}) 

module.exports = mongoose.model("Trips",tripSchema)