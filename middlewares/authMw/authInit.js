const cookie_parser = require('cookie-parser')
module.exports = function(objectRepository){
    return (req,res,next)=>{
        const auth = req.signedCookies["session"]
        if(!auth){
            res.setHeader("WWW-Authenticate","Basic")
            return res.sendStatus(401)
        }
        else{
            return next()
        }
    }
}