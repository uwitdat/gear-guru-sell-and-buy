require('./config/database');
const data = require('./data')

const Guitar = require('./models/guitar')
const Amp = require('./models/amp')
const User = require('./models/user')
const Post = require('./models/post')


// const createGuitars = Guitar.create(data.guitars)
const showPosts = Post.find({})
const showGtrs = Guitar.find({})
const showAmps = Amp.find({})

Promise.all([showPosts])
.then((res) => {
    console.log('posts --->', res)
    process.exit
})



// Guitar.find({type: 'Solid Body'})
// .then((res)=>{
// return Post.find({guitar: res}).populate('guitar').exec()
// }).then((res)=>{
//     console.log(res)
// })

// Guitar.find({type: 'Solid Body'})
// .then((res)=> {
// return Post.find({guitar: res}).populate('guitar').exec()
// }).then((res)=>{
//     console.log(res)
// })