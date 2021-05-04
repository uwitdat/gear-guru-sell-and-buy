const Guitar = require('../models/guitar');
const Amp = require('../models/amp')
const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
    showGuitars,
    showVintageGuitars,
    showModernGuitars,
    showSolidBody,
    showHollowBody,
    showBelow1000,
    showAmps,
    showSolidState,
    showTube,
    showAmpUnder1000,
}


//show all guitars
function showGuitars(req, res){
    Guitar.find({})
        .then((res)=>{
            return Post.find({guitar: res}).populate('guitar user').exec()
        }).then((posts)=>{
            console.log('this is the post', posts)
        res.render('posts/guitars', {posts})
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

//show all amps
function showAmps(req, res){
    Amp.find({})
        .then((res)=>{
            return Post.find({amp: res}).populate('amp').exec()
        }).then((posts)=>{
            res.render('posts/amps', {posts})
        })
    }

function showSolidState(req, res){
    Amp.find({type: 'Solid State'})
        .then((res)=>{
            return Post.find({amp: res}).populate('amp').exec()
        }).then((posts)=>{
            res.render('posts/solidState', {posts})
        })
}

function showTube(req, res){
    Amp.find({type: 'Tube'})
    .then((res)=>{
        return Post.find({amp: res}).populate('amp').exec()
    }).then((posts)=>{
        res.render('posts/tube', {posts})
    })
}

function showAmpUnder1000(req, res){
    Amp.find({price: {$lt: 1000}})
    .then((res)=>{
        return Post.find({amp: res}).populate('amp').exec()
    }).then((posts)=>{
        res.render('posts/ampsBelow1000', {posts})
    })
}


    /// get posts 

    /// create posts 

    /// Update 

    /// Delete 