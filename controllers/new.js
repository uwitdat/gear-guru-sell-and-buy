
const Amp = require('../models/amp');
const Post = require('../models/post')
const Guitar = require('../models/guitar')


function newGtr(req, res){
    res.render('new/guitar')
}

function newAmp(req, res){
    res.render('new/amp')
}

async function createPost(req, res){

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

    await guitar 
    .save()
    .then(guitarResponse => { 
        const guitarId = guitarResponse._id 

        const newPost = new Post({ 
            title, 
            description, 
            guitar: guitarId
        })
    
        newPost
        .populate('guitar', 'brand year type price', Guitar)
        .save()
        .then(response => { 
            console.log(response)
            res.redirect(
                '/posts/guitars'
            )              
        })
        .catch(err => { 
            console.log(err)
            res.send(err)
        })
    })
    console.log(req.body)    
    const post = new Post(req.body)
}



async function createAmpPost(req, res){

    // create amp ref get id 
    // pass id as ref 

    // Amp 
    const { title, description, brand, type, price } = req.body 

    const amp = new Amp({
        brand, 
        type, 
        price
    })

    await amp 
    .save()
    .then(ampResponse => { 
        const ampId = ampResponse._id 

        const newPost = new Post({ 
            title, 
            description, 
            amp: ampId
        })
    
        newPost
        .populate('amp', Amp)
        .save()
        .then(response => { 
            console.log(response)
            res.redirect(
                '/posts/amps'
            )              
        })
        .catch(err => { 
            console.log(err)
            res.send(err)
        })
    })
    console.log(req.body)    
    const post = new Post(req.body)
}

module.exports = {
    newGtr,
    newAmp,
    createPost,
    createAmpPost,
}