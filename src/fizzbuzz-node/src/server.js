const port = process.env.PORT || 5500;
const http = require("http");
const fs = require("fs");
const path = require("path");

const handler = (request, response) => {
    const endpoint = request.url;
    const method = request.method;
    console.log(`endpoint: ${endpoint}, method: ${method}`);
    const num = endpoint.split("/")[1];
    if (endpoint === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(
            path.join(__dirname, "..", "public", "index.html"),
            function(error, file) {
                if (error) {
                    console.log(error);
                    return;
                }
                response.end(file);
            }
        );
    } else if (endpoint !== "/" && num % 5 === 0 && num % 3 === 0) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("FizzBuzz");
        response.end();
    } else if (endpoint !== "/" && num % 3 === 0) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("Fizz");
        response.end();
    } else if (endpoint !== "/" && num % 5 === 0) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("Buzz");
        response.end();
    } else if (endpoint !== "/" && !isNaN(num)) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(num);
        response.end();
    } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("Pick a number as your endpoint OK...");
        response.end();
    }
};

const server = http.createServer(handler);
server.listen(port, () => {
    console.log(`server active at http://localhost.com:${port}`);
});
