const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guitarSchema = new Schema({
    brand: {
        type: String,
        required: true, 
        enum: ['Fender', 'Gibson', 'Ibanez', 'Taylor', 'PRS', 'ESP']
    },
    year: {
        type: Number,
        required: true,
        min: 1950,
        max:2021
    },
    type: {
        type: String, 
        required: true, 
        enum: ['Solid Body', 'Hollow Body', 'Acoustic']
    },
    price: {
        type: Number,
        required: true
    }
})


const postSchema = new Schema({
    title: {
        type: String, 
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    guitar: [guitarSchema],
    amp: [{type: Schema.Types.ObjectId, ref: 'Amp'}]
}, {
    timestamps: true
})





module.exports = mongoose.model('Post', postSchema)