#!/usr/bin/node

const fs=require('fs');

var lnk=process.argv[2];

console.log(fs.readlinkSync(lnk));//查看链接内容