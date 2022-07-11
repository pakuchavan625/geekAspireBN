const employes = require("../Modal/employeModel")



exports.postEmployesDetail =(req,res)=>{
    const {id ,name,email,phone}=req.body

    const newEmployesObj = new employes(
        {
            id ,
            name,
            email,
            phone 
        }
    )
    newEmployesObj.save().then(response=>{
        res.status(200).json({ message :"employess are added ", newemploys : response});
    }).catch(err=>{
        res.status(500).json({ error : err})
    })
}

