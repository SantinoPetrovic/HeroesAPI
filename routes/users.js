const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');

const url = 'mongodb://localhost:27017/';

const User = require('../models/user');
router.get('/getUsers', (req, res, next) => {
    res.send('GET users');
});

router.post('/register', (req, res, next) => {
    let newUser = new User ({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email
    });
    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({ success: false, message:'Failed to register new user.'});
        } else {
            res.json({ success: true, message:'New user registered.'});
        }
    });
});

router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, msg: "User not found"});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({success: true, token: 'JWT '+token, user: {
                    id: user._id,
                    name: user.name,
                    username: user.username,
                    email: user.email
                }});
            } else {
                return res.json({success: false, msg: "Wrong password"});
            }
        });
    });
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user})
});
module.exports = router;