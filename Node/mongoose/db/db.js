let mongoose = require('mongoose')
mongoose.set('useCreateIndex',true)

const IP = '127.0.0.1'
const PORT = '27017'
const MONGODB = 'demo'

mongoose.connect(`mongodb://${IP}:${PORT}/${MONGODB}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

module.exports = function (crud) {
    mongoose.connection.on('open' ,function (err) {
        if(err) {
            console.log('连接失败',err)
            crud('连接失败')
        } else {
            console.log('连接成功')
            crud()
        }
    })
}

