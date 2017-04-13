//var usersController=require('./server/controllers/user.server.controller');
//Import All controllers here.
var homeController = require('./server/controllers/home.controller');

module.exports = function(app) {
app.get('/',function(req,res){
   res.sendfile(__dirname+'/www/index.html');
})
app.get('/home',  homeController.index);
app.get('/getDashboardData',  homeController.getDashboardData);

//app.get('/users',usersController.list)
//app.post('/users',usersController.create)
}