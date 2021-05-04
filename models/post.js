const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalizeMongoose = require("normalize-mongoose");


const PostSchema = new Schema({
    title: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    // one guitar 
    guitar: { 
        type: Schema.Types.ObjectId,
        ref: 'guitars'
    },
    // one amp 
    amp: {
        type: Schema.Types.ObjectId,
        ref: 'amps'
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})


PostSchema.plugin(normalizeMongoose)



module.exports = mongoose.model('posts', PostSchema)