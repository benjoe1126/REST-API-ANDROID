module.exports = function(objectRepo){
    return (req,res,next)=>{
        const stud = objectRepo.student
        if(!req.body || !req.body["username"] || !req.body["password"] || !req.body["neptun"] || !req.body["age"]){
            return res.sendStatus(400)
        }
        let student = new stud()
        console.log(req.body)
        student.username = req.body["username"]
        student.neptun = req.body["neptun"].trim().toUpperCase()
        student.password = req.body["password"]
        student.gender = req.body["gender"] || "other"
        student.age = req.body["age"]
        student.is_admin = false
        student.lives_in = false
        console.log(student)
        student.save((err)=>{
            if(err){
                return res.sendStatus(400)
            }
            return res.sendStatus(200)
        })

    }
}
