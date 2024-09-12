const schema=require('mongoose').Schema;
const db=require('../config/db');
const Hallgatok=db.model('Hallgato',{
    username: String,
    gender: String, 
    age: Number, //age is just a number
    neptun: String,
    _room_id:{
        type: db.Types.ObjectId,
        ref:'room'
    },
    password: String,
    room_number: Number,
    lives_in: Boolean,
    is_admin: Boolean
});

module.exports =Hallgatok;