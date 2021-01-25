let mongoose = require('mongoose')
let db = require('./db/db')
let stuModel = require('./module/studentsModel')
let teacherModel = require('./module/teacherModel')

db(function (err) {
    if(err) {
        console.log(err)
    } else {
        teacherModel.create({
            teacher_id:'001',
            name:'wls',
            age:'22',
            sex:'男',
            info:'smart',
            hobby:['acm','人工智能'],
        },function (err,data) {
            if(!err) {
                console.log('写入成功',data)
            } else {
                console.log(err)
            }
        })
    }
})
// stuModel.create({
//     stu_id:'003',
//     name:'姬文茂',
//     age:99,
//     sex:'男',
//     info:99999,
//     hobby:['游戏','吃饭','打水']
// },function (err,data) {
//     if(!err) {
//         console.log('文件写入成功',data)
//     } else console.log(err)
// })
// stuModel.find({stu_id:'001'},{age:1,_id:0},function (err,data) {
//     if (!err) {
//         console.log('文件写入成功', data)
//     } else console.log(err)
// })
// stuModel.updateOne({name:'王尚位'},{age:999},function (err,data) {
//     if (!err) {
//         console.log('文件写入成功', data)
//     } else console.log(err)
// })
// stuModel.deleteOne({name:'姬文茂'},function (err,data) {
//     if (!err) {
//         console.log('文件删除成功', data)
//     } else console.log(err)
// })