const fs = require('node:fs');
const path = require('node:path');
// 相对路径转绝对路径
const jsUrl = path.resolve(__dirname, './src/file1.js');
const textUrl = path.resolve(__dirname, './src/test.txt');

// 同步获取文件状态
const fileStatus = fs.statSync(file1url);
// 打开文件，不会真打开，只是在缓冲区打开文件描述符，后续可以通过fs.read去读取文件内容
const openResult = fs.openSync('');
