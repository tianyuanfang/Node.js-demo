#!/usr/bin/node

process.stdin.resume();
console.log(process.pid);

process.on('SIGINT',()=>{
 console.log('you press ctrl+c,good bye');
 process.exit();
});

process.on('SIGTSTP',()=>{
  console.log("you press ctrl+z,stop running");
  process.exit();
});
