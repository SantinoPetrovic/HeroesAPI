const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const Hero = require('../models/hero');
router.get('/getHeroes', (req, res, next) => {
    res.send('GET');
});

router.post('/postHeroes', (req, res, next) => {
    let newHero = new Hero ({
        name: req.body.name,
        description: req.body.description,
        link: req.body.link
    });
    Hero.addHero(newHero, (err, hero) => {
        if(err) {
            res.json({ success: false, message:'Failed to register new hero.'});
        } else {
            res.json({ success: true, message:'New hero registered.'});
        }
    });
});

module.exports = router;