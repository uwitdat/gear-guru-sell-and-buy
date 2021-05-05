require('./config/database');
const data = require('./data')

const Guitar = require('./models/guitar')
const Amp = require('./models/amp')
const User = require('./models/user')
const Post = require('./models/post')


// const createGuitars = Guitar.create(data.guitars)
const dltPosts = Post.deleteMany({})
const dltGtrs = Guitar.deleteMany({})
const dltAmps = Amp.deleteMany({})
const dltUsers = User.deleteMany({})



    User.find({})
    .then((res) => {
        return Post.find({user: res}).populate('user').exec()
    }).then((posts)=>{
        console.log(posts)
    })




