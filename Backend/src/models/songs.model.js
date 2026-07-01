const mongose = require('mongoose')

const songSchema = new mongose.Schema({
    title:String,
    artist:String,
    audio:String ,
    mood:String,
})

const songModel = mongose.model("song",songSchema)

module.exports = songModel