module.exports = function(app){
    var action = require('../controllers/actionController');

    app.route('/actions')
        .get(action.list_all_actions)
        .post(action.create_actions);
}