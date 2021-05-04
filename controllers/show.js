const Guitar = require('../models/guitar');
const Amp = require('../models/amp')
const Post = require('../models/post')

module.exports = {
    showGuitar,
    showAmp,
    editGtr,
    updateGtr,
}

function showGuitar(req, res){
    Post.findById(req.params.id).populate('guitar').exec().then((post)=>{
        res.render('show/showGuitar', { post })
    })
}

function showAmp(req, res){
    Post.findById(req.params.id).populate('amp').exec().then((post)=>{
        res.render('show/showAmp', { post })
    })    
}

//get edit
function editGtr(req, res){
    Post.findById(req.params.id).populate('guitar').exec().then((post)=>{
        res.render('show/editGuitar', { post })
    })
}

//put edit
function updateGtr(req, res){
    Post.findOneAndUpdate(req,params.id, req.body, {new: true}).populate('guitar').exec().then((post)=>{
        post.save().then((res)=>{
            console.log(res)
            res.redirect('show/showGuitar', { post })
        })
    })
    }
