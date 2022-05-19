const http = require("http");

const server = http.createServer((_, res) => {
  console.log("server is created");
  res.end("hello");
});
server.listen(3000);
