const express = require("express");
const getemployeControler=require("../Controller/getemployeControler")
const employeControler=require("../Controller/employeController")

const route = express.Router();

route.get('/getemploye',getemployeControler.findEmployes)
route.post("/employedeatil",employeControler.postEmployesDetail)


module.exports = route;