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
    userDate :{
        type: Date
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
    },
    userCategory: {
      type: String
    },
    raw: {
      type: Object
    }
});

ActionSchema.pre('save', function(next) {
  this.userCategory = this.get('category');
  this.userDate = this.get('date');
  next();
});

module.exports = mongoose.model('Action', ActionSchema);
