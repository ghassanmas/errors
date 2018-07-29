const http= require("http");
const fs = require("fs");



const router=(req,res)=>{

 fs.readFile(__dirname+"/index.html",(error,file)=>{
   if(error){
     res.writeHeader(500,{"content-type":"text/html"});
     res.end("<h1> Don't call me may be </h1>");
   }else{
     res.writeHeader(200,{"content-type":"text/html"});
     res.end(file);

   }
 });

};



const server=http.createServer(router);
server.listen(3000,()=>{
  console.log("start Listening!");
})
