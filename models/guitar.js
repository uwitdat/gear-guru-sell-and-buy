const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalizeMongoose = require("normalize-mongoose");

const GuitarSchema = new Schema({
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

GuitarSchema.plugin(normalizeMongoose)

module.exports = mongoose.model('guitars', GuitarSchema)