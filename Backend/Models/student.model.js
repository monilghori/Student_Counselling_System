const mongoose = require("mongoose")

const studentschema = new mongoose.Schema({
        id : {type : String},
        name: {type : String},
        email :{type : String},
        password: { type: String },
        sem : {type : Number},
        batch : {type : String},
        total_query : {type : Number,default : 0},
        facultyId : {type : mongoose.Schema.Types.ObjectId, ref : "faculty"},
    role: { type: String },
    image: { type: String, default: null }
},
{
    timestamps: true,   
    versionKey: false,
    autoCreate: true
}
);

const student = new mongoose.model("student",studentschema,"student")
module.exports = student