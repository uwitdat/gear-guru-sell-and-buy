const Amp = require('../models/amp');
const Post = require('../models/post')
const Guitar = require('../models/guitar')

function show(req, res){
    Post.findById(req.params.id).populate('guitar').exec().then((post)=> {
        
        res.render('show/checkout', {post})
    })
}

module.exports = {
    show,
}