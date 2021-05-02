const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/project2', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection

db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected To Mongoose for Project Two'))