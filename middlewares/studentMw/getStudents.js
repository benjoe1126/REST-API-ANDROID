/* 
    Több hallgató lekérésére szolgál
*/

module.exports = function(objectRepo){
    const student=objectRepo.student;
    return function(req, res, next){
    	const usr = req.query.username
    	const nep = req.query.neptun
        student.findOne({$or:[{username:usr},{neptun:nep}]},(err,students)=>{
            if(err||!students){
                return res.sendStatus(404);
            }
            return res.json(students)
        })
    }
}
