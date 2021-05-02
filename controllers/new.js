
const Amp = require('../models/amp');
const Post = require('../models/post')
// const Gtr = require('../models/guitar')


module.exports = {
    getNew,
    newGtr,
    newAmp,
    createPost,
    createAmp,
}

function getNew(req, res){
    res.render('new/new')
}

function newGtr(req, res){
    res.render('new/guitar')
}

function newAmp(req, res){
    res.render('new/amp')
}

function createPost(req, res){
    const post = new Post(req.body)
    post.guitar.push({
        brand: req.body.brand,
        year: req.body.year,
        type: req.body.type,
        price: req.body.price,
       })
       post.save((err)=> {
           if(err) res.render('new/guitar')
           console.log(post)
           res.redirect('/posts/guitars')
       })
}


function createAmp(req, res){
    const post = new Post(req.body)
    const amp = new Amp(req.body)
    amp.save((err) => {
        console.log('new amp post --->', amp)
        if(err) res.render('new/amp')
        post.amp.push(amp)
        post.save((err) => {
        if(err) res.render('new/amp')
        console.log('new POST --->', post)
        res.redirect('/posts/amps')
        })
    })
}