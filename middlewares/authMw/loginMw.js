module.exports = function(objectRepo){
    return (req,res,next)=>{
        console.log(req.body)
        const model = objectRepo.student
        if(!req.body["username"] || !req.body["password"]){
            return res.sendStatus(400)
        }
        else if(req.body["username"] === "admin" && req.body["password"] === 'admin'){
            const session = new Buffer.from("admin:admin").toString('base64')
            res.cookie("is_admin","true",{signed:true})
            res.cookie("session",session,{expire: 360000 + Date.now(), signed: true})
            return res.sendStatus(200)
		}
        else {
            model.findOne({$and: [{"name": req.body["username"]}, {"password": req.body["password"]}]}, (err, stud) => {
                if (err || !stud) {
                    return res.sendStatus(404)
                }
                const session = new Buffer.from(stud.username + ":" + stud.password).toString('base64')
                const admin = stud["is_admin"].toString()
                res.cookie("is_admin",admin,{signed:true})
                res.cookie("session", session, {expire: 360000 + Date.now(),signed: true})
				return res.sendStatus(200)
            })
        }
    }
}
