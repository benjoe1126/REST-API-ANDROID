/* Ha hallgatót akarok a szobából törölni*/

module.exports=function(objectRepo){
    return function(req,res,next){
    	console.log(res.locals.hallgato)
        if(typeof res.locals.hallgato==='undefined')
            return res.sendStatus(404);
        objectRepo.room.findOne({_id:res.locals.hallgato._room_id},(err,room)=>{
            console.log(res.locals.hallgato)
            room.num_of_peeps--;
            res.locals.hallgato._room_id=null;
            res.locals.hallgato.lives_in=false;
            res.locals.hallgato.room_number = null
            room.save(err=>{
                if(err)
                    return res.sendStatus(404);
            })
            res.locals.hallgato.save(err=>{if(err)return res.sendStatus(404)});
            return res.sendStatus(200)
        })
    }
}
