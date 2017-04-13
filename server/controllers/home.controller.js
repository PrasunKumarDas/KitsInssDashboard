  
module.exports.index=function(req,res){
	//res.render('index.ejs');

}

module.exports.getDashboardData = function(req,res){
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
            "tillStatus": "GREEN"
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
}