const findEmploye = require("../Modal/getemployeModal");


exports.findEmployes=(req,res)=>{
    findEmploye.find().then((response)=>{
        res.status(200).json({message:"employes data fetched successfully", employes:response
    }).catch((err)=>{
        res.status(500).json({ error : err})
    })
    })
}