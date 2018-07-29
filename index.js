const http= require("http");
const fs = require("fs");



const router=(req,res)=>{

  res.writeHeader(200,{"content-type":"text/html"});
  res.end("<h1>Hey, I just met you, and this is crazy! Here is a callback, so call it maybe?</h1>");

 });

};



const server=http.createServer(router);
server.listen(3000,()=>{
  console.log("start Listening!");
})
