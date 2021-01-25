let mongoose = require('mongoose')

let Schema = mongoose.Schema
let stuSchema = new Schema({
    stu_id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    info:{
        type:Schema.Types.Mixed
    },
    hobby:{
        type:[String],
    },
    date:{
        type:Date,
        default:Date.now()
    },
    enable_flag:{
        type:String,
        default:"Y"
    }

})
let stuModel = mongoose.model('students',stuSchema)
module.exports = stuModel