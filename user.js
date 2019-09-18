import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    thumbnail: String,
    loginName: String,
    loginPassword: String,
    last: String,
    first: String,
    kana_last: String,
    kana_first: String,
    mail : String,
})

const User = mongoose.model('user',UserSchema)

export default User