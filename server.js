const http = require("http");
const port = process.env.port || 3000;
const app = require("./app");
const server = http.createServer(app);

server.on("listening", () => {
  console.log(`Server Started on port ${port}`);
});

server.on("request", (req, res, next) => {
  console.log("Request made to server from url", req.origin);
});

server.listen(port);
