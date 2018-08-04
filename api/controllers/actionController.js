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

exports.create_actions = function(req, res) {
    var new_action = new Action(req.body);
    new_action.save(function(err, action) {
      if (err)
        res.send(err);
      res.json(action);
    });
};

exports.read_a_action = function(req, res) {
  Action.find({date : req.body.date, amount: req.body.amount, description: req.body.description}, function(err, action) {
    if (err)
      res.send(err);
    res.json(action);
  });
};


exports.update_a_action = function(req, res) {
  Action.findOneAndUpdate({_id: req.params.actionId}, req.body, {new: true}, function(err, action) {
    if (err)
      res.send(err);
    res.json(action);
  });
};
