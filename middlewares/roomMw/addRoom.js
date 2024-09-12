/* Creates room

*/

module.exports = function(db){
    const RoomModel=require('../../entities/room')
    return function(req,res,next){
        if(typeof (req.body["room_number"]) === 'undefined')
            return res.sendStatus(404);
        const RoomModel = db.room
        res.locals.room = new RoomModel();
        res.locals.room.room_number=Number(req.body.room_number);
        res.locals.room.room_capacity=Number(req.body.room_capacity);
        res.locals.room.cleaning_up=req.body.cleaning_up || false;
        res.locals.room.level_communnity=req.body.level_communnity || null;
        res.locals.room.num_of_peeps= 0;
        console.log(res.locals.room)
        res.locals.room.save((err)=>{
            if (err){
                res.sendStatus(400)
            }
        });
        return res.json(res.locals.room);
    }
}
