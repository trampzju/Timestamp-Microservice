var fs = require("fs");
var http = require("http");
var url = require("url");
var server = http.createServer((request, response) => {
  if (request.method == "GET") {
      var req = url.parse(request.url);
      var time = req.query.substr(4);
      //console.log(time);
      //console.log(time.substr(12,2));
      var result1 = {"hour": 0, "minute": 0, "second": 0};
      result1.hour = Number(time.substr(11,2)) + 8;
      result1.minute = Number(time.substr(14,2));
      result1.second = Number(time.substr(17,2));
      response.end(JSON.stringify(result1));

      var date = new Date(req.query.substr(4));
      var result2 = {"unixtime": date.getTime()};
      response.end(JSON.stringify(result2));
  }
});
server.listen(80);