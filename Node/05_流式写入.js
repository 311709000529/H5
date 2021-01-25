let fs = require('fs')

let ws = fs.createWriteStream('./demoStream.txt',{mode:0o666}) ;

ws.on('open',()=>{
    console.log('可写流打开了')
})
ws.on('close' ,()=>{
    console.log('可写流关闭了')
})

ws.write('你好')
ws.write('我是王尚位')
ws.write('你在干嘛')

// ws.close()
ws.end()