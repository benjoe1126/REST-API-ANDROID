/*
    Törli a szobát, majd redirectel a szobák oldalra
*/
module.exports = function (objectRepo){
    return function (req, res, next){
        if(typeof res.locals.room==='undefined'){
            return res.sendStatus(404)
        }
        objectRepo.student.find({_room_id:res.locals.room._id},(err,students)=>{
            if(err||!students){
                return res.sendStatus(404);
            }
            students.forEach((stud,error)=>{
                stud._room_id=null;
                stud.lives_in=false;
                stud.save(err=>{
                    if(err)
                        return res.sendStatus(404)
                })
            })
        })
        res.locals.room.remove(err=>{
            if(err)
                res.sendStatus(404);
        })
        return res.sendStatus(200);
    }
}
