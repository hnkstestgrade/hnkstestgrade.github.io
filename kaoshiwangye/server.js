// const http = require ('http');
// const fs = require('fs');
// const qs= require("querystring");
// const path = require('path');
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


// const port = 3000;
// const ip ="127.0.0.1";




// const server= http.createServer((req,res) => {
// var method=req.method;
// var url=req.url

// const sendResponse=(filename,statusCode,res) => {
    
//     fs.readFile(path.join(__dirname,`${filename}`),(err,data) => {
//         if(err){
//           res.statusCode = 404;
//           res.end('404 not Found');
//         }else{ res.respond}
//     });


// }

// if(method="GET"||url===''){
    
//     if(url==="/"){sendResponse('kaoshixuanqu.html',200,res) }
//     else if(url==='/login.html'){ sendResponse('login.html',200,res)}
//     else if(url==='/login-success.html'){ sendResponse('login-success.html',200,res)}
//     else if(url==='/login-fail.html'){ sendResponse('login-fail.html',200,res)}
//     else {sendResponse('404.html',404,res)}
//     res.end( )}
   
//     else if (url==="/process-login"){
//      let body = [];
//      req.on("data",(chunk) => {body.push(chunk);});
//      req.on("end",() => {console.log(body);
//                         body=Buffer.concat(body).toString();
//                         body= qs.parse(body);});

//                         if (body.username==='宁鹤翔' && body.password==='123') 
//                         {
//                             res.statusCode=301;
//                             res.setHeader("Location","./login-success.html");
//                         } else 
//                         {res.statusCode=301;
//                            alert("输入信息错误，无法登陆查询系统！")
//                         }
//                         res.end();
//     }
//      else{
//                 const suffix = '.'+url.split('.').pop();
//                 if(mime[suffix])
//                 {
//                     res.setHeader('Content-Type',mime[suffix]);
//                     res.end(data);
//                     res.statusCode=statusCode
//                 }
//                 else
//                 {
//                     res.statusCode = 416;
//                     res.setHeader('Content-Type','text/plain;charset=UTF-8');
//                     res.end('该类型文件不支持访问！');
//                 }
//             }
//             }

// });


// server.listen(port,ip,() => {
//  console.log (`server is running at http://${ip}:${port}` );
// });


