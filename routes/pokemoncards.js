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

const Pokemoncard = require('../models/pokemoncard');

router.post('/getcard', (req, res, next) => {
    const id = req.body.id;
    console.log(id);
    Pokemoncard.getCard(id, (err, cardres) => {
        if(err) throw err;
        if(!cardres) {
            return res.json({success: false, msg: "Card not found"});
        }

        res.json({success: true, card: cardres});
    });
});

module.exports = router;