const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.method=='POST'){
        console.log(req.body)//It will be undefined
        //expecting data from client

        let body='';
        //dta will be recieving in chuncks --data stream
        //on method has two parameters which is type of event, here it is data and recieved data chuck is attached to body
        //here data and end are the events coming from  http API request
        req.on('data',(chunk)=>{
            body+=chunk.toString();
        })
        req.on('end',()=>{
            console.log(body);
            res.end('Data is recieved')
        })
    }
    else{
        res.end("Welcome to Node.js Server")
    }

    
});
server.listen(3100)
console.log("Server is listening on 3100")