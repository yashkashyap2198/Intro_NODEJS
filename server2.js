//import http library/module
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.write('Welcome to my application');
    if(req.url=="/product"){

        //response ends 

        // return res.end("This is product page");
        res.end("This is product page");

    }else if(req.url=='/user'){
        res.end('This is user page');
    }
    //modifying the response
    res.end("Welcome to NODEJS Server");
    
})
server.listen(4100,()=>{
    console.log("Server is listening on port 4100");
})