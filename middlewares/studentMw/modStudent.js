/*
    Hallgató módosítása a db-ben
*/
module.exports = function(db){
    const student=db.student;
    return function(req, res, next){
        let hallgato = res.locals.hallgato
        if(typeof res.locals.hallgato==='undefined'){
            return res.sendStatus(404)
        }
        hallgato.name=req.body.username;
        hallgato.neptun=req.body.neptun.toUpperCase();
        hallgato.gender=req.body.gender;
        hallgato.is_admin = req.body.is_admin
        hallgato.age=req.body.age;
        if(typeof res.locals.room!=='undefined'){
            hallgato._room_id=res.locals.room._id;
        }
        hallgato.save(err=>{
            if(err){
                return res.sendStatus(404);
            }
        })
        return res.json(hallgato)
    }
}
