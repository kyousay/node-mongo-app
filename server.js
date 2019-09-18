import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
import Datas from './uploadData'
// import Member from './members'
// import User from './user'

const app = express()
const port = process.env.PORT || 3001
const dbUrl = 'mongodb://127.0.0.1:27017/LP'

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(bodyParser.json({ limit: "50mb" }))

mongoose.connect(dbUrl, dbErr => {
    if(dbErr) throw new Error(dbErr)
    else console.log('db connected')

    app.post('/upload',(request,response) => {
        const Data = new Datas()
        const {first,last,mail} = request.body.form
        Data.image = request.body.image
        Data.name = last + "" + first
        Data.mail = mail
        Data.save(err => {
            if(err) console.log(err)
            response.send("正常にアップロードされました。")
        })
    })

    // app.post('/login/acount',(request,response) => {
    //     const username = request.body.name
    //     const password = request.body.password
    //     User.find({ "username" : username }, (err, result) =>{
    //         if (err)
    //             console.log(err);
        
    //         // 新規登録
    //         if (result.length == 0){
    //             var user = new User()
        
    //             user.username = username
    //             user.password = password
    //             user.favorite = ''
        
    //             user.save((err) => {
    //             if (err) console.log(err)
    //             response.send("アカウントを作成しました。ログインをお願いします。")
    //             })
    //         }
    //         // usernameがDBに存在した場合
    //         else{
    //             response.send('既にアカウントが存在しています。')
    //         }
    //     })
    // })

    // app.post('/login',(request,response) => {
    //     const username = request.body.name
    //     const password = request.body.password
    //     User.find({ "username" : username }, (err, result) =>{
    //         if (err)
    //             console.log(err);
        
    //         // 新規登録
    //         if (result.length == 0){
    //             response.send("アカウントがありません。登録してください。")
    //         }
    //         // usernameがDBに存在した場合
    //         else{
    //             if (result[0].password == password)
    //             response.send(
    //                 {
    //                     text: "ログインに成功しました。",
    //                     status: "login",
    //                     _id:result[0]._id,
    //                     name: result[0].username,
    //                     favorite: result[0].favorite
    //                 },
    //             )
    //             else
    //             response.send({text: "パスワードが違います。",status: "logout"});
    //         }
    //     })
    // })

    app.listen(port,err => {
        if(err) throw new Error(err)
        else console.log(`listening on port ${port}`)
    })
})