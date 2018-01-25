var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Action = require('./api/models/actionModel'), //created model loading here
  Category = require('./api/models/categoryModel'), //created model loading here
  bodyParser = require('body-parser'),
  cors = require('cors');
  
app.use(cors());
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rozliczenia'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/actionRoutes'); //importing route
routes(app); //register the route

var routes = require('./api/routes/categoryRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);