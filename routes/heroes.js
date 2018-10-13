const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const Hero = require('../models/hero');
router.get('/getHeroes', (req, res, next) => {
    res.send('GET');
/*    let self = this;
    let DotaHeroList = []
    try {
    MongoClient.connect(url, function(err, db) {
    	assert.equal(null, err);
    	var dbo = db.db("dotaHeroesDB");
    	let cursor = dbo.collection("heroes").find();			    
        cursor.each(function(err, doc) {
        	assert.equal(err, null);
        	if (doc != null) {
        		DotaHeroList.push(doc);
        	} else {
        		self.res.setHeader('Content-Type', 'text/json');
                return self.res.status(200).json({
                    status: 'success',
                    data: DotaHeroList
                })
            }
        });							            
    });
    } 
    catch(error){
        return self.res.status(500).json({
            status: 'error',
            error: error
        })
    }*/
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