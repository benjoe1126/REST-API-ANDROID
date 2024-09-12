module.exports = function(objectRepo){
    return (req,res,next)=>{
        objectRepo.room.find({},(err,rooms)=>{
            if(err){
                res.sendStatus(404)
            }
            res.json(rooms)
            return next()
        })
    }
}