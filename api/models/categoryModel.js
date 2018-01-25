var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    label: {
        type: String,
        required: 'please add label'
    },
    name :{
        type: String,
        required: 'Please add name'
    },
    keyWords: {
        type: Array
    }
});

module.exports = mongoose.model('Category', CategorySchema);