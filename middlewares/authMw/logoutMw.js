module.exports = function(){
    return (req,res,next)=>{
        res.clearCookie("user")
        res.clearCookie("session")
        res.clearCookie("is_admin")
        return res.sendStatus(200)
    }
}
