const fs= require('fs');
const path= require('path');
const event= require('events');
const http= require('http');
const { log } = require('console');
const {fechData} = require('./event')

const server= http.createServer((req, res)=>{
    log(req.url);
    if(req.url == '/'){
        // const dataPath=fechData();
        // const fileStatus=fs.statSync(dataPath);
      
        // fs.readFile(dataPath, "utf-8", (err, data)=>{
        //     if(err){
        //         log('err from read data', err)
        //     }    
        //     res.writeHead(200,{
        //         "content-type":"appication/json",
        //         "content-length": fileStatus.size,
        //         });
        //         res.end(data)
            
        // })

         const targertPath= path.join(__dirname, "public", "index.html")
    const readStrem= fs.createReadStream(targertPath);
    readStrem.on("data", (chunk)=>{
        res.write(chunk);
    });
    readStrem.off("end", ()=>{
        log('data read down')
        res.end()
    })
    readStrem.on("error",(err)=>{
        log("erro from readstem end event", err)
    })
    }
   else if(req.url == "/video"){
    // const videoPath= path.join(__dirname, "video", "five.mp4") ;
    const fileStatus= fs.statSync(videoPath);
    const videoSize=fileStatus.size;
  const range=req.headers.range;
   const breackRang = range;
   log(breackRang.replace("bytes=","").split("-"))
    // range

}
})
server.listen(4000, ()=>{
    log(`server running on http://localhost:4000`)
})