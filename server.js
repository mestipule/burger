const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
//import the route
const routes = require('./controller/handlebars');
//initializing express by defining it
const app = express();
app.use(express.static('public'));

//creating your port so this will set up the compatibility between
//mac and windows
const PORT = process.env.PORT || 3000;

//configuring our bodyPaser
//this is adding generic JSON and URL encoded, w/c parse 
//the bodies of  all incoming request
app.use(bodyParser.urlencoded({ extended: true}));//idk if what's the difference between false or true??
app.use(bodyParser.json());
app.use(methodOverride('_method'));


// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());
//configures the express-handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//configuring the routes
app.use('/', routes);

//setting up your express
app.listen(PORT, function(req, res){
    console.log('Server is on Port ' + PORT);
});
