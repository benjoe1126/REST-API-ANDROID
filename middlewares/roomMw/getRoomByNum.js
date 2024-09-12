
module.exports = function(objectRepo){
    return (req,res,next)=>{
        const room = objectRepo.room
        const rnum = req.query.room_number
        room.findOne({room_number: rnum},(err,r)=>{
            if(err || !r){
                return res.sendStatus(400)
            }
            return res.json(r)
        })
    }
}
