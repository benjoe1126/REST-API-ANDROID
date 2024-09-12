module.exports = function (objectRepo){
    return (req,res,next)=>{
        objectRepo.student.find({},(err,stud)=>{
            if(err){
                return res.sendStatus(404)
            }
            res.json(stud)
            return next()
        })
    }
}