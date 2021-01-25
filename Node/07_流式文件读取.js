let fs = require('fs')

let rs = fs.createReadStream('./demo.flv',{
    highWaterMark: 10 * 1024 * 1024
})

let ws = fs.createWriteStream('./demoStream.flv')

rs.on('open',function () {
    console.log('文件开始读取')
})
rs.on('close' ,function () {
    console.log('文件读取结束')
    ws.end()
})
ws.on('open',function () {
    console.log('文件开始写入')
})
ws.on('close' ,function () {
    console.log('文件写入结束')
})

rs.on('data',function (data) {
    console.log(data.length)
    ws.write(data)
})

