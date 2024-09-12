const mongoose = require('mongoose');
mongoose.connect('mongodb://db/mobweb')
//mongoose.connect('mongodb://localhost:27017/mobweb')
module.exports = mongoose;
