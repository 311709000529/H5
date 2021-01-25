let http = require('http')
let qs = require('querystring')


let server = http.createServer(function (request,response) {
    let param = request.url.split('?')[1]
    let paramObj = qs.parse(param)
    let {name,age} = paramObj
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end(`<h1>你好我的名字是${name},我的年龄是${age}</h1>`)
})
server.listen(3000 ,function (err) {
    if(!err) {
        console.log('服务器执行成功')
    } else {
        console.log(err)
    }
})