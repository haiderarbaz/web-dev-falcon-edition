const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    res.url === "/" ? "index.html" : "req.url"
  );

  const extName = String(path.extname(filePath)).toLowerCase();

  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/js",
    ".png": "text/png",
  };
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
