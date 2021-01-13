const http = require("http");

function requestResponseHandler(req, res) {
  console.log(`Incoming Request : ${req.url}`);

  const apiRegex = new RegExp(/api/);
  if (apiRegex.test(req.url)) {
    fetchResponse(req, res);
  } else {
    sendError(req, res);
  }
}

function fetchResponse(req, res) {
  const resJson = {
    data: "Demo",
  };

  res.writeHead(200, { "Content-Type": " application/json" });
  res.write(JSON.stringify(resJson));
  res.end();
}

function sendError(req, res) {
  res.writeHead(500, "Server only supports api requests");
  res.write("Internal Error");
  res.end();
}

module.exports = requestResponseHandler;
