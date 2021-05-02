var express = require('express');
var router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const passport = require('passport')

router.get('/login', (req, res) => {
    res.render('login.ejs')
})

router.get('/register', (req, res) => {
    res.render('register.ejs')
})
  
router.post('/register', (req, res) => {
    const {username, email, password, password2 } = req.body
    let errors = []

    if(!username || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields'})
    }

    if(password !== password2){
        errors.push({ msg: 'Passwords do not match'})
    }

    if(errors.length > 0) {
        res.render('register', {
            errors,
            username,
            email,
            password,
            password2
        })
    }else{
        //validation passed
    User.findOne({ email: email})
    .then(user => {
        if(user) {
            errors.push({ msg: 'Email is already in use'})
            res.render('register', {
                errors,
                username,
                email,
                password,
                password2
            });
        }else{
            const newUser = new User({
                username,
                email, 
                password
            })

            // encrypt password
            bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                // set password to hashed
                newUser.password = hash;
                //save user
                newUser.save()
                .then(user => {
                    res.redirect('login')
                    console.log(user)
                })
                .catch(err => console.log(err))
            }))
        }
    })
    }
})  

//login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login'
    })(req, res, next)
})
  
  module.exports = router;
