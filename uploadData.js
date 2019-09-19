import mongoose from 'mongoose'

const uploadDataSchema = new mongoose.Schema({
    id: String,
    image: String,
    name: String,
    mail : String,
    date : String 
})

const Data = mongoose.model('Data',uploadDataSchema)

export default Data