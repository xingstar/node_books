const fs = require('fs');
const path = require('path');
console.log(path.resolve())
const readFile = function(fileName) {
    return new Promise(function(resolve, reject){
        fs.readFile(fileName, function(error, data){
            console.log('🍎红',error);
            if(error) return reject(error);
            resolve(data);
        });
    });
};
const asyncReadFile = async function(){
    const f1 = await readFile('assets/test.txt'); // 文件的路径是相对于项目根目录来的，开头也不需要以/开头
    console.log(f1.toString());
};
asyncReadFile();


//Streams
// const Readable = require('stream').Readable;
// const Writable = require('stream').Writable;
// const Transform = require('stream').Transform;



