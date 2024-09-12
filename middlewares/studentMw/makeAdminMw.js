module.exports = function (objectRepo){
    return (req,res,next)=>{
        const id = req.params["hId"]
        const stud = objectRepo.student
        const student = new stud()
        stud.findOne({_id:id},(err,stud)=>{
            if(err){
                return res.sendStatus(400)
            }
            stud.is_admin = true
            stud.save(err=>{
                if(err)
                    return res.sendStatus(500)
                return res.sendStatus(200)
            })
        })
    }
}