const schema=require('mongoose').Schema;
const { Schema } = require('mongoose');
const db=require('../config/db');
const Szobak=db.model('Szoba',{
    room_number: Number,
    room_capacity: Number,
    cleaning_up: Boolean,
    level_communnity: String,
    num_of_peeps: Number
});
module.exports=Szobak;