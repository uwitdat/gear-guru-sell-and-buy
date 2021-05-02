const Gtr = require('../models/guitar');

const Post = require('../models/post')

module.exports = {
    showGuitars,
}

function showGuitars(req, res){
Post.find({})
.populate('guitar')
.exec ((err, posts)=>{
res.render('posts/guitars', {posts})
})
}