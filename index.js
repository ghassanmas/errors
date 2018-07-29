const http= require("http");
const fs = require("fs");



const router=(req,res)=>{

 const file=readFile(__dirname+"/index.html");

 if(file instanceof Error){
   res.writeHeader(200,{"content-type":"text/plain"});
   res.end("Don't call me may be");
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
