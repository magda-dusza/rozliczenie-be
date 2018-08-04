module.exports = function(app){
    var action = require('../controllers/actionController');

    app.route('/actions')
        .get(action.list_all_actions)
        .post(action.read_a_action)
        .put(action.update_a_action);

    app.route('/actions/new')
        .post(action.create_actions);

    app.route('/actions/:actionId')
        .put(action.update_a_action);
}
