/* 
    Hallgató lekérdezése DB-ből
*/

module.exports = function(db){
    return function(req, res, next){
    	console.log("ide vok" + req.params["hId"])
        db.student.findOne({_id:req.params["hId"]}, (err,hallgato)=>{
            console.log(hallgato)
            if(err||!hallgato)
                return res.sendStatus(404);
            res.locals.hallgato=hallgato;
            return next();
            })
        }
    }
