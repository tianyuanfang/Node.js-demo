#!/usr/bin/node

const http=require('http'),
      fs=require('fs');
//web 服务器根路径是当前脚本所在目录
//web 服务监听 8080 端口
//正确响应浏览器发送的 URL 请求
//当 URL 地址中的资源文件不存在时，提示用户文件不存在的错误信息
http.createServer((req,res)=>{
  console.log('==========================');
  console.log(req.headers);

  var file=__dirname+req.url;
  fs.readFile(file,(err,data)=>{
    if(err){
      console.log('Error:',err.message);
      res.statusCode=404;
      res.end(err.message);
    }else{
      res.end(data);
    }
  });
}).listen(8080);

// curl http://localhost:8080/01-std-io.js

