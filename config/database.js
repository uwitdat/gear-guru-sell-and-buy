const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_CONN, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection

db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected To Mongoose for Project Two'))