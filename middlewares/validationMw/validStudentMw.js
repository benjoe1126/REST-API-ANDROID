
/*
    Megnézi, hogy minden mező ki van e töltve, valamint azt is hogyha van már ilyen Neptun kód (mindnekit egyértelműen azonosíŧ)
    , akkor ne vegyük fel újra, illetve hogy valid e a neptun kódja () jegy, csak angol betűk, és számok)
*/
module.exports = function(objectRepo){
    return function(req, res, next){
    	const neptun = req.body.neptun ? req.body.neptun.trim().toUpperCase() : ""
    	console.log(req.body)
        if(req.body.username===''||req.body.age==''||req.body.neptun==='' || req.body.password === ''){
            res.locals.error="Minden mezőt ki kell tölteni";
            return res.sendStatus(400)
        }
        else if(isNaN(Number(req.body.age))){
            res.locals.error="A formátum nem megfelelő";
            return res.sendStatus(400)
        }
        else if(!(/^[A-Z0-9]*$/.test(neptun)||neptun.length!=6)){
            console.log(neptun)
            console.log(neptun.length)
            res.locals.error="A NEPTUN kód 6 karakter hosszú és csak az angol ABC beűit és számokat tartalmazhat";
            return res.sendStatus(400)
        }
        else{
            objectRepo.student.findOne({neptun:neptun},(err,stud)=>{
                if(err){
                    return res.sendStatus(400)
                }
                if(stud!==null&&(typeof req.params.hId==='undefined'||stud.username!==res.locals.hallgato.username)){
                    res.locals.error="Egy neptun csak egy hallgatóhoz tartozhat";
                    console.log('mar van')
                    return res.sendStatus(400)
                }
                return next();
            })
        }
    }
}
