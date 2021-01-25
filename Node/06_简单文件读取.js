let fs = require('fs')

fs.readFile('./demo.mp3',function (err ,data) {
    if ( err ) console.log('文件读取失败')
    else {
        fs.writeFile('../demo1.mp3',data,function (err) {
            if(err) console.log('文件写入失败')
            else {
                console.log('文件写入成功')
            }
        })
    }
})