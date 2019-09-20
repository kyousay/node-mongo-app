import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
import Datas from './uploadData'
// import Member from './members'
import User from './user'

const app = express()
const port = process.env.PORT || 3001
const dbUrl = 'mongodb://heroku_11gs2dg8:so3b32tq5cebib5u6b02g5ttio@ds033186.mlab.com:33186/heroku_11gs2dg8'
// const dbUrl = 'mongodb://127.0.0.1:27017/LP'


app.use(express.static(path.join(__dirname, 'client/build')))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(bodyParser.json({ limit: "50mb" }))

mongoose.connect(dbUrl, dbErr => {
    if(dbErr) throw new Error(dbErr)
    else console.log('db connected')

    app.post('/upload',(request,response) => {
        const Data = new Datas()
        const {first,last,mail} = request.body.data.form
        Data.id = request.body.data.id
        Data.image = request.body.data.image
        Data.name = last + "" + first
        Data.mail = mail
        Data.date = request.body.data.date
        Data.save(err => {
            if(err) console.log(err)
            response.send("正常にアップロードされました。")
        })
    })

    app.post('/createAcount',(request,response) => {
        const loginName = request.body.name
        const loginPassword = request.body.password
        User.find({ "loginName" : loginName }, (err, result) =>{
            if (err)
                console.log(err);
        
            // 新規登録
            if (result.length == 0){
                var user = new User()
        
                user.loginName = loginName
                user.loginPassword = loginPassword
                user.save((err) => {
                if (err) console.log(err)
                response.send("アカウントを作成しました。ログインをお願いします。")
                })
            }
            // usernameがDBに存在した場合
            else{
                response.send('既にアカウントが存在しています。')
            }
        })
    })

    app.post('/login',(request,response) => {
        const loginName = request.body.name
        const loginPassword = request.body.password
        User.find({ "loginName" : loginName }, (err, result) =>{
            if (err)
                console.log(err);
        
            // 新規登録
            if (result.length == 0){
                response.send({text:"アカウントがありません。登録してください。"})
            }
            // usernameがDBに存在した場合
            else{
                if (result[0].loginPassword == loginPassword)
                response.send(
                    {
                        text: "ログインに成功しました。",
                        statusCode: true,
                        user: {
                            id:result[0]._id,
                            loginName: result[0].loginName,
                            last: result[0].last,
                            first: result[0].first,
                            kana_last: result[0].kana_last,
                            kana_first: result[0].kana_first,
                            mail : result[0].mail,
                            thumbnail: result[0].thumbnail,
                        }
                    },
                )
                else
                response.send({text: "パスワードが違います。"});
            }
        })
    })

    app.post('/mypage',(request,response) => {
        const _id = request.body.id
        const thumbnail = request.body.thumbnail

        User.findByIdAndUpdate(_id, { thumbnail: thumbnail }, err => {
            if (err) response.status(500).send()
            else {  // updateに成功した場合、すべてのデータをあらためてfindしてクライアントに送る
                User.find({_id:_id}, (findErr, characterArray) => {
                    if (findErr) response.status(500).send()
                    else response.status(200).send({thumbnail:characterArray[0].thumbnail})
                })
            }
        })
    })

    app.post('/mypage/history',(request,response) => {
        Datas.find({ id: request.body.id }, (findErr, dataArray) => {
            if (findErr) response.status(500).send()
            else response.status(200).send(dataArray)
        })
    })

    app.post('/mypage/history/delete',(request,response) => {
        const { _id } = request.body
        const { id } = request.body
        Datas.findByIdAndRemove({_id}, err => {
            if (err) response.status(500).send()
            else {
                Datas.find({id}, (findErr, dataArray) => {
                    if (findErr) response.status(500).send()
                    else response.status(200).send(dataArray)
                })
            }
        })
    })


    app.post('/mypage/change',(request,response) => {
        const _id = request.body.id
        User.findByIdAndUpdate(_id, { 
            last: request.body.last,
            first: request.body.first,
            kana_last: request.body.kana_last,
            kana_first: request.body.kana_first,
            mail : request.body.mail,
         }, err => {
            if (err) response.status(500).send()
            else {  // updateに成功した場合、すべてのデータをあらためてfindしてクライアントに送る
                User.find({_id:_id}, (findErr, characterArray) => {
                    if (findErr) response.status(500).send()
                    else response.status(200).send(characterArray[0])
                })
            }
        })
    })

    app.listen(port,err => {
        if(err) throw new Error(err)
        else console.log(`listening on port ${port}`)
    })
})