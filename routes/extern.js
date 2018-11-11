const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');
const request = require('request');
const http = require('http');
const fs = require('fs');
const url = 'mongodb://localhost:27017/';

const Card = require('../models/card');

router.post('/extractjson', (req, res, next) => {
    
    request(req.body.url, function (error, response, body) {
        if (error) {
            res.json({ success: false, message: "Error occured! Something went wrong with the request"});
        } else {
            const obj = JSON.parse(body);
            for(const card in obj.cards){
                let newHero = new Card ({
                    id: obj.cards[card].id,
                    name: obj.cards[card].name,
                    nationalPokedexNumber: obj.cards[card].nationalPokedexNumber,
                    types: obj.cards[card].types,
                    subtype: obj.cards[card].subtype,
                    supertype: obj.cards[card].supertype,
                    hp: obj.cards[card].hp,
                    number: obj.cards[card].number,
                    artist: obj.cards[card].artist,
                    rarity: obj.cards[card].rarity,
                    series: obj.cards[card].series,
                    set: obj.cards[card].set,
                    setCode: obj.cards[card].setCode,
                    retreatCost: obj.cards[card].retreatCost,
                    attacks: obj.cards[card].attacks,
                    weaknesses: obj.cards[card].weaknesses
                });                
                Card.addCard(newHero, (err, user) => {
                    if(err) {
                    } else {}
                });                                
            }                        
        }
    });
    res.json({ success: true, message: "test"});        
});

module.exports = router;