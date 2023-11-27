import http from "http";
import fs from "fs";

const sendFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.end("error");
    }
    res.end(data);
  });
};

const requestHandler = (req, res) => {
  console.log("Ein neuer Request: ", req.url, req.method);

  if (req.url === "/") {
    sendFile("./assets/home.html", res);
  } else {
    const filePath = "./assets" + req.url;
    sendFile(filePath, res);
  }
};

const server = http.createServer(requestHandler);

server.listen(8080, () => {
  console.log("huhu, bin da");
});
