const { db } = require("../../entities/student");
const routes = require("../../routes");

/* 
    Mielőtt módosítások történnének ez a mw megnézi, hogy ezek a módosítások validak e,
    ez a legtöbb esetben annyit tesz, hogy megnézi, minden mező ki van e töltve, valamint ha
    új embert akarunk a szobához adni akkor még ellenőrzi, hogy megvan e a max létszám (4)
*/
module.exports = function(db){
    return function(req, res, next){
    	console.log(req.body)
        if(typeof req.body.room_number==='undefined'||isNaN(Number(req.body.room_number))){
            return res.sendStatus(400)
        }
        else if(typeof req.body.room_capacity==='undefined'||isNaN(Number(req.body.room_capacity))){
            return res.sendStatus(400)
        }
        else if(typeof res.locals.room!=='undefined'&&Number(req.body.room_capacity)<res.locals.room.num_of_peeps){
            return res.sendStatus(400)
        }
        else if(typeof res.locals.room ==='undefined'){
            db.room.findOne({room_number:req.body.room_number},(err,r)=>{
                if(err || r){
                    return res.sendStatus(400)
                }
                return next()

            })
        }
        else{
            return next()
        }
    }
}
