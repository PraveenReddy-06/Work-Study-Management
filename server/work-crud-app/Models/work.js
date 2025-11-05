const mongoose= require("mongoose")

const Workschema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    city:{
        type:String,
        require:true
    }
})

module exports= mongoose.model("student ")