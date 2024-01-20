const querySchema = require("../Models/query.model")
const studentSchema = require("../Models/student.model")
const message = require("../utils/message.json")
const enums = require("../utils/enums.json")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

module.exports = {

    askMentor : async (req, res) => {

        const {question , sid} = await req.body
        console.log(sid);
        try{
            
            const student = await studentSchema.findOne({id : sid})
            console.log(question);

            const que = {
                query : question,
                querybystudent : student._id
            }

            const querydata = await querySchema.create(que)

            if(querydata)
            {
                return res
                        .status(enums.HTTP_CODE.OK)
                        .json({success : true , message : message.QUERY_SUCCESS})
            }
            else{
                return res
                        .status(enums.HTTP_CODE.INTERNAL_SERVER_ERROR)
                        .json({success : false , message : message.FAILED})
            }
        }
        catch(err){
            return res
                    .status(enums.HTTP_CODE.INTERNAL_SERVER_ERROR)
                    .json({success : false , message : err.message})
        }
    }

}