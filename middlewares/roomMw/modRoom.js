/* 
    Menti a módosításokat adatbázisba
*/
module.exports = function (mod){
    return function (req, res, next) {
        if(typeof req.body.room_number!=='undefined'){
            res.locals.room.room_number=req.body.room_number;
            res.locals.room.room_capacity=req.body.room_capacity;
            res.locals.room.cleaning_up=Boolean(req.body.cleaning_up);
            res.locals.room.level_communnity=req.body.level_communnity;
        }
        res.locals.room.save((err)=>{
            if(err){
                return res.sendStatus(404);
            }
        })
        return res.json(res.locals.room);
    }
}
