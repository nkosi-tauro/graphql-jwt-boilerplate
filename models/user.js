const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type : String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('userDetails', userSchema)