/* A szobákhoz hozzáadáshoz, hogy minden hallgatót lekérhessek (nem akartam már a sima getStudents-cel mókolni*/

module.exports=function(objectRepo){
    return function(req,res,next){
        if(typeof res.locals.room==='undefined'){
            return res.sendStatus(404)
        }
        console.log(res.locals.room._id)
        objectRepo.student.find({_room_id:res.locals.room._id},(err,stud)=>{
            if(err||!stud){
                return res.sendStatus(404)
            }
            return res.json(stud)
        })
       
    }
}
