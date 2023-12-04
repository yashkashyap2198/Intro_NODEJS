//create a server using Node.JS
//Import http library/module

const http = require('http');
//Create Server

const server = http.createServer((req, res) => {
    //Here comes the request.

    res.end("welcome to node.js server");
})
//spacify a part to listen to client's requests.

server.listen(2100, () => {
    console.log("Server is listening on port 2100");
})


