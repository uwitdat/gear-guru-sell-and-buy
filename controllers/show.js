const Guitar = require('../models/guitar');
const Amp = require('../models/amp')
const Post = require('../models/post');
const User = require('../models/user');




module.exports = {
    showGuitar,
    showAmp,
    editGtr,
    updateGtr,
    deleteGtr,
    editAmp,
    updateAmp,
    deleteAmp,
    getUser,


}

function showGuitar(req, res){
    Post.findById(req.params.id).populate('guitar user').exec().then((post)=>{
        res.render('show/showGuitar', { post })
    })
}

function showAmp(req, res){
    Post.findById(req.params.id).populate('amp user').exec().then((post)=>{
        res.render('show/showAmp', { post })
    })    
}

//get edit
function editGtr(req, res){
    Post.findById(req.params.id).populate('guitar user').exec().then((post)=>{
        res.render('show/editGuitar', { post })
    })
}

// put edit guitar
async function updateGtr(req, res){
    console.log(req.params.id)

    let post = {
        title: req.body.title,
        description: req.body.description, 

    }

    let guitar = {
        brand: req.body.brand,
        year: req.body.year,
        type: req.body.type,
        price: req.body.price
    }

    let newPost = await Post.findOneAndUpdate({_id: req.params.id}, post, {new: true})

    let newGuitar = await Guitar.findOneAndUpdate({_id: newPost.guitar}, guitar, {new: true})
    
    res.redirect('/posts/guitars')
    }




    // delete function
    function deleteGtr(req, res){
        Post.findById(req.params.id).exec().then((post)=>{
            console.log(post)
            post.remove()
            res.redirect('/posts/guitars')
        })
    }

    //get edit amp
function editAmp(req, res){
    Post.findById(req.params.id).populate('amp user').exec().then((post)=>{
        res.render('show/editAmp', { post })
    })
}

//put edit amp
async function updateAmp(req, res){
    console.log(req.body)

    let post = {
        title: req.body.title,
        description: req.body.description    
    }

    let amp = {
        brand: req.body.brand,
        type: req.body.type,
        price: req.body.price
    }

    let newPost = await Post.findOneAndUpdate({_id: req.params.id}, post, {new: true})

    let newAmp = await Amp.findOneAndUpdate({_id: newPost.amp}, amp, {new: true})
    
    res.redirect('/posts/amps')
    }


    // delete function
    function deleteAmp(req, res){
        Post.findById(req.params.id).exec().then((post)=>{
            console.log(post)
            post.remove()
            res.redirect('/posts/amps')
        })
    }

function getUser(req, res){
    User.findById(req.params.id)
    .then((user)=> {
        return Post.find({user: user}).populate('user guitar').exec().then((userPost)=>{
            res.render('show/user', {userPost})
        })
    })
}

