var city ="Dakar"

var http= require('http');

var request= http.get("http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22", function(reponse){
//sole.dir(reponse.statusCode);

	var body ="";

	reponse.on('data', function(chunk) {
    body +=chunk;                                                      

  });


reponse.on('end', function(){
	
	var data_weather= JSON.parse(body);
	console.log(typeof data_weather);


});

});