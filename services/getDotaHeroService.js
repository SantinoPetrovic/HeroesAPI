const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';

class GetHeroService{
    constructor(req, res){
        this.req = req
        this.res = res
    }

    getSmashHeroes(){
    	let self = this;
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
    	}
    }

    getSpecificSmashHero(link){
    	let self = this;
    	try {
	        MongoClient.connect(url, function(err, db) {
	        	assert.equal(null, err);
	        	var dbo = db.db("dotaHeroesDB");
				dbo.collection("heroes").findOne({link: link}, function(err, result) {
	        		self.res.setHeader('Content-Type', 'text/json');
	                return self.res.status(200).json({
	                    status: 'success',
	                    data: result
	                })								  
				});
	        });
    	} 
    	catch(error){
	        return self.res.status(500).json({
	            status: 'error',
	            error: error
	        })    		
    	}
    }

    addSmashHero(data){
    	let self = this;
    	try {
	        MongoClient.connect(url, function(err, db) {
	        	assert.equal(null, err);
	        	var dbo = db.db("dotaHeroesDB");
				dbo.collection("heroes").insertOne({"name": data.name, "link": data.link, "description": data.description}, function(err, result) {
	        		self.res.setHeader('Content-Type', 'text/json');
	                return self.res.status(200).json({
	                    status: 'success',
	                    data: result
	                })								  
				});
	        });
    	} 
    	catch(error){
	        return self.res.status(500).json({
	            status: 'error',
	            error: error
	        })    		
    	}
    }
    updateDotaHero(){

    }    
    deleteDotaHero(){

    }        
}
module.exports = GetHeroService