const express = require('express')

const app = express()

app.get('/',function (request,response) {
    console.log(request.query)
    console.log(request.get())
    response.send('这是一个express服务器')
})

app.listen(3000,function (err) {
    if ( !err ) console.log('服务器打开成功')
    else {
        console.log(err)
    }
})