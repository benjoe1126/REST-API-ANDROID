
module.exports = function(){
    return (req,res,next) => {
        let coockie = req.signedCookies
        if(!coockie || (coockie["is_admin"] !== "true")){
            console.log(coockie)
            return res.sendStatus(401)
        }
        return next()
    }
}