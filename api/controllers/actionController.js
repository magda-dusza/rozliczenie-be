var mongoose = require('mongoose');
var Action = mongoose.model('Action');

exports.list_all_actions = function(req, res){
    Action.find({}, function(err, action){
        if(err) res.send(err);
        res.json(action);
    });
};

exports.create_actions = function(req, res) {
    var new_action = new Action(req.body);
    new_action.save(function(err, action) {
      if (err)
        res.send(err);
      res.json(action);
    });
};
  
  
  