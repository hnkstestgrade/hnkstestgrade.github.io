// const http = require('http');
// const fs = require('fs');
// const PORT = 8080;
// // 响应类型对象配置项
// const mime = {
// 	".jpg" : "image/jpeg",
// 	".jpeg" : "image/jpeg",
// 	".gif" : "image/gif",
// 	".png" : "image/png",
// 	".html" : "text/html;charset=UTF-8",
// 	".css" : "text/css",
// 	".js" : "application/x-javascript",
// 	".mp3" : "audio/mpeg",
// 	".mp4" : "video/mpeg"
// };
// const qs= require("querystring");
// const path=require('path')
 
// http.createServer((req,res)=>{
//     if(req.url === '/'){
//         fs.readFile(path.join(__dirname,'kaoshixuanqu.html'),'utf-8',(err,data)=>{
//             if(err){
//                 res.statusCode = 500;
//                 res.end('error');
//             }else{
//                 res.setHeader('Content-Type',mime['.html']);
//                 res.end(data);
//             }
//         });}
    

//         else{
//         fs.readFile(path.join(__dirname,req.url),(err,data)=>{
//             if(err){
//                 res.statusCode = 404;
//                 res.end('404 not Found');
//             }else{
//                 const suffix = '.'+req.url.split('.').pop();
//                 if(mime[suffix]){
//                     res.setHeader('Content-Type',mime[suffix]);
//                     res.end(data);
//                 }else{
//                     res.statusCode = 416;
//                     res.setHeader('Content-Type','text/plain;charset=UTF-8');
//                     res.end('该类型文件不支持访问！');
//                 }
//             }
//         });
//     }
// }).listen(PORT,()=>{
//     console.log('open server');
//     console.log(`http://127.0.0.1:${PORT}/`);
// })

