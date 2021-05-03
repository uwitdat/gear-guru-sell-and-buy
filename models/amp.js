const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ampSchema = new Schema({
    brand: {
        type: String, 
        required: true,
        enum: ['Marshall', 'Fender', 'Vox', 'Orange', 'Line 6']
    },
    type: {
        type: String,
        required: true, 
        emum: ['Tube', 'Solid State']
    },
    price: {
        type: Number,
        required: true,
    
    },

})

module.exports = mongoose.model('amps', ampSchema)