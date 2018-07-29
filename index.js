const http= require("http");
const fs = require("fs");



const router=(req,res)=>{

try{

 const file=fs.readFileSync(__dirname+"/index.html");
 res.writeHeader(200,{"content-type":"text/html"});
 res.end(file);

}
catch(e){
  res.writeHeader(200,{"content-type":"text/html"});
  res.end("<h1> don't call me may be </h1>");

}
};



const server=http.createServer(router);
server.listen(3000,()=>{
  console.log("start Listening!");
});
