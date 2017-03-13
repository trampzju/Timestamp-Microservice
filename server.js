var fs = require("fs");
var http = require("http");
var url = require("url");
var server = http.createServer((request, response) => {
  if (request.url!=="/favicon.ico") {
      	var req = url.parse(request.url);
	if(req.path.substr(1).length === 0) {
		response.end("{\"unix\": null, \"natural\": null}");
		return;
	}
	//console.log(req);
	var reg = /[^0-9]/;
	if(reg.test(req.path.substr(1))){
      		var time = req.path.substr(1).replace(/%20/g, " ");
		//console.log(time);
      		var date = new Date(time);
		if(isNaN(date)) {
			response.end("{\"unix\": null, \"natural\": null}");
		}
		else {
      			var result2 = {"unix": date.getTime(), "natural": date.toDateString()};
      			response.end(JSON.stringify(result2));
		}
	}
	else {
		var date = new Date();
		//console.log(req.path.substr(1));
		date.setTime(req.path.substr(1));
		var result2 = {"unix": req.path.substr(1), "natural": date.toDateString()};
      		response.end(JSON.stringify(result2));
	}
  }
});
server.listen(process.env.PORT || 5000);