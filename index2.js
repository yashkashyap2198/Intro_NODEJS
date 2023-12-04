// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here

// module.exports = server;

const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const data=fs.readFileSync(index2.html).toString();
    res.end(data);
})
server.listen(8082);
    console.log("Showing the html data on port 8082");

