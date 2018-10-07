const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';

router.get('/getHeroes', (req, res, next) => {
    res.send('Jeeeeeeee');
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
module.exports = router;