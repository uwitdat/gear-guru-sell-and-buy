
const Amp = require('../models/amp');
const Post = require('../models/post')
const Guitar = require('../models/guitar')
const User = require('../models/user')
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']




function newGtr(req, res){
    res.render('new/guitar')
}

function newAmp(req, res){
    res.render('new/amp')
}

async function createPost(req, res){
    console.log(req.user)

    // create guitar ref get id 
    // pass id as ref 

    // Guitar 
    const { title, description, brand, year, type, price } = req.body 

    const guitar = new Guitar({
        brand, 
        year, 
        type, 
        price
    })
        try {
            const newGuitar = await guitar.save()
               
            const newPost = new Post({ 
                title, 
                description, 
                guitar: newGuitar._id,
                user: req.user._id,
            })
                saveCover(newPost, req.body.cover)

                 await newPost.save()

                    res.redirect('/posts/guitars') 

            } catch(err) {
                 console.log(err)
       }
}




async function createAmpPost(req, res){


    // create guitar ref get id 
    // pass id as ref 

    // AMP
    const { title, description, brand, type, price } = req.body 

    const amp = new Amp({
        brand,  
        type, 
        price
    })
        try {
            const newAmp = await amp.save()
               
            const newPost = new Post({ 
                title, 
                description, 
                amp: newAmp._id,
                user: req.user._id
            })
            
            saveCover(newPost, req.body.cover)
        
                 await newPost.save()

                    res.redirect('/posts/amps') 

            } catch(err) {
                 console.log(err)
       }
}

function saveCover(newPost, coverEncoded){
    if(coverEncoded == null) return 
    const cover = JSON.parse(coverEncoded)
    if(cover != null && imageMimeTypes.includes(cover.type)){
        newPost.coverImage = new Buffer.from(cover.data,'base64') 
        newPost.coverImageType = cover.type
    }
}

module.exports = {
    newGtr,
    newAmp,
    createPost,
    createAmpPost,
}