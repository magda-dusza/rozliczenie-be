var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActionSchema = new Schema({
    bank: {
        type: String
    },
    date :{
        type: Date,
        default: Date.now
    },
    description :{
        type: String
    },
    amount :{
        type: Number,
        default: 0
    },
    category :{
        type: String
    }
});

module.exports = mongoose.model('Action', ActionSchema);