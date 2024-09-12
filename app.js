const express=require('express');
const app=express();
const routes = require('./routes/index');
const cookie_parser = require('cookie-parser')
const bodyparser = require('body-parser')
app.use(cookie_parser('1234'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.json())
routes(app);
app.use((err,req,res,next)=>{ 
    res.end('Hiba van a mátrixban');
    console.log(err);
});
app.listen(3000);
console.log("Listening on http://localhost:3000");