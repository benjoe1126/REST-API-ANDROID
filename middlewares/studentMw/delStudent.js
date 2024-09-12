/*
    Törli az adott hallgatót az adatbázisból
*/
const {query} = require("express");
module.exports=function(db){
    return function(req,res,next){
        if(typeof db.student==='undefined'){
            return res.sendStatus(404);
        }
        db.student.findOne({_id: req.params.hId},(err,stud)=>{
            if(err||!stud){
                return res.sendStatus(404);
            }
            if(typeof stud._room_id !== undefined){
                db.room.findOne({_id:stud._room_id},(err,r)=>{
                    if(err || !r) return res.sendStatus(404)
                    r.num_of_peeps--;
                    r.save((err)=>{
                        if(err) return res.sendStatus(404)
                    })
                })
            }
            stud.remove(err=>{
                if(err)
                    return res.sendStatus(404);
            })
            return res.sendStatus(200);
        })
    }
}