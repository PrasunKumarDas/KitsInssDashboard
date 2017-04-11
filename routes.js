//var usersController=require('./server/controllers/user.server.controller');


module.exports = function(app) {
 app.get('/',function(req,res){
	res.sendfile(__dirname+'/www/index.html');

})
 app.get('/getDashboardData',function(req,res){
 	var data = {
    "tillHeartBeatReport": [
        {
            "tillNo": "131748",
            "storeNo": "1317",
            "storeName": "abc",
            "latestPostTimeStamp": "2017-04-0518: 50: 25.848",
            "elapsedBy": "11 Minutes 21 Seconds",
            "elapseStatus": "elapse-green",
            "tillStatus": "GREEN"
        },
        {
            "tillNo": "131724",
            "storeNo": "1317",
            "storeName": "abc",
            "latestPostTimeStamp": "2017-04-0518: 50: 25.848",
            "elapsedBy": "30 Minutes 21 Seconds",
            "elapseStatus": "elapse-amber",
            "tillStatus": "AMBER"
        },
        {
            "tillNo": "131720",
            "storeNo": "1317",
            "storeName": "abc",
            "latestPostTimeStamp": "2017-04-0518: 50: 25.848",
            "elapsedBy": "6 Hours 30 Minutes 21 Seconds",
            "elapseStatus": "elapse-red",
            "tillStatus": "RED"
        }
    ]
};
 	
 	res.send(data);
	
})
//app.get('/users',usersController.list)
//app.post('/users',usersController.create)
}