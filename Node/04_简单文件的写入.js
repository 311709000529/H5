
let fs = require('fs')

fs.writeFile('./demo.txt' ,',我怎么得到你' ,{mode:0o666,flag:"a"},(err)=>{
    if ( err ) {
        console.log("文件写入失败",err)
    } else {
        console.log('文件写入成功')
    }
})