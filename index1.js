const http=require('http');
//import file system file('fs')

const fs=require('fs');
const server=http.createServer((req,res)=>{
    const data=fs.readFileSync('index.html').toString();
    res.end(data);
})
server.listen(6100,()=>{
    console.log('Server is listening on 3100');
})