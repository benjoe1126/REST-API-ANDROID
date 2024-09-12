
module.exports = function (objectRepo){
    return (req,res,next)=>{
        const id = req.params["rId"]
        console.log(id)
        objectRepo.room.findOne({_id:id},(err,room)=>{
            console.log(room)
            if (err || !room){
                res.sendStatus(404)
            }
            res.locals.room = room
            return next()
        })
    }
}
