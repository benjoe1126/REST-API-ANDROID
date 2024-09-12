/*Azt állítja, hogy egy hallgató mely szobába lakik */

module.exports=function(objectRepo){
    return function(req,res,next){
        objectRepo.student.findOne({neptun:req.body.neptun.toUpperCase()},(err,stud)=>{
            console.log(stud)
            if(err||!stud)
                return res.sendStatus(404);
            if(res.locals.room.num_of_peeps!==res.locals.room.room_capacity){
                stud._room_id=res.locals.room._id;
                stud.lives_in=true;
                stud.room_number=res.locals.room.room_number;
                res.locals.room.num_of_peeps++;
                res.locals.room.save();
                stud.save();
            }
            return res.json(stud);
        })
    }
}
