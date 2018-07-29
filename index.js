const http= require("http");
const fs = require("fs");



const router=(req,res)=>{

 const file=readFile(__dirname+"/index.html");

 if(file instanceof Error){
   res.writeHeader(500,{"content-type":"text/html"});
   res.end("<h1> Don't call me may be </h1>");
 }else{
   res.writeHeader(200,{"content-type":"text/html"});
   res.end(file);
 }


};



const server=http.createServer(router);
server.listen(3000,()=>{
  console.log("start Listening!");
})


const readFile = (path)=>{
  try{
    return(fs.readFileSync(path))
  }
  catch(e){
    return(e)
  }

}
