const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const jwt = require('jsonwebtoken');
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

module.exports = router;