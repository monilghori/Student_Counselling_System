const express = require("express")
const router = express.Router()
const adminController = require("../Controllers/admin.controller")
const { validate4loginadmin , validate4createstudent, validate4delete, validate4createfaculty} = require("../utils/joi.validate")

router.post("/login", validate4loginadmin, adminController.adminLogin)
router.post("/assignfaculty", adminController.assignFaculty)
router.post("/createstudent", validate4createstudent, adminController.createStudent)
router.post("/deletestudent", validate4delete, adminController.deleteStudent)
router.post("/createfaculty", validate4createfaculty, adminController.createFaculty)
router.post("/deletefaculty", validate4delete, adminController.deleteFaculty)
router.get("/getallstudents", adminController.getAllStudent)
router.get("/getallfaculties", adminController.getAllfaculty)

module.exports = router