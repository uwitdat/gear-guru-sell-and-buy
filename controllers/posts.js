const Guitar = require('../models/guitar');


const Post = require('../models/post')

module.exports = {
    showGuitars,
    showVintageGuitars,
    showModernGuitars,
    showSolidBody,
    showHollowBody,
    showBelow1000,
}
//show all guitars
function showGuitars(req, res){
    Post.find({})
    .populate('guitar')
    .exec()
    .then((posts)=>{
        res.render('posts/guitars', {posts})})
        .catch((err)=>{
        console.log(err)
    })
}


    //show vintage guitars
function showVintageGuitars(req, res){
    Guitar.find({year: {$lt:1980}})
        .then((res)=>{
            return Post.find({guitar: res}).populate('guitar').exec()
        }).then((posts)=>{
            res.render('posts/vintage', {posts})
        })
    }

//show modern guitars
function showModernGuitars(req, res){
    Guitar.find({year: {$gt:2009}})
    .then((res)=>{
        return Post.find({guitar: res}).populate('guitar').exec()
    }).then((posts)=>{
        res.render('posts/modern', {posts})
    })
}

//show solid body guitars
function showSolidBody(req,res){
    Guitar.find({type: 'Solid Body'})
    .then((res)=> {
        return Post.find({guitar: res}).populate('guitar').exec()
    }).then((posts)=>{
        res.render('posts/solidBody', {posts})
    })
}

function showHollowBody(req, res){
    Guitar.find({type: 'Hollow Body'})
    .then((res)=>{
        return Post.find({guitar: res}).populate('guitar').exec()
    }).then((posts)=>{
        res.render('posts/hollowBody', {posts})
    })
}

function showBelow1000(req, res){
    Guitar.find({price: {$lt:1000}})
    .then((res)=>{
        return Post.find({guitar: res}).populate('guitar').exec()
    }).then((posts)=>{
        res.render('posts/below1000', {posts})
    })
}




    /// get posts 

    /// create posts 

    /// Update 

    /// Delete 