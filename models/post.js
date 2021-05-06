const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalizeMongoose = require("normalize-mongoose");


const PostSchema = new Schema({
    title: {
        type: String, 
        required: true,
        unique: false,
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
    },
    coverImage: {
        type: Buffer,
        required: true
    },
    coverImageType: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})


PostSchema.virtual('coverImagePath').get(function(){
    if(this.coverImage != null && this.coverImageType != null){
        return `data:${this.coverImageType};charset=utf-8;base64,
        ${this.coverImage.toString('base64')}`
    }
})


PostSchema.plugin(normalizeMongoose)



module.exports = mongoose.model('posts', PostSchema)