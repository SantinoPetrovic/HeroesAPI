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

const BindCard = require('../models/bind-card');

router.post('/getcardsByUser', (req, res, next) => {
    const id = req.body.userId;
    BindCard.getCardsByUser(id, (err, cardsres) => {
        if(err) throw err;
        if(!cardsres) {
            return res.json({success: false, msg: "Cards not found"});
        }

        res.json({success: true, cards: cardsres});
    });
});

router.post('/postbinder', (req, res, next) => {
    let newCard = new BindCard ({
        id: req.body.id,
        cardId: req.body.cardId,
        userID: req.body.userID,
        condition: req.body.condition,        
        pokemonCoins: req.body.pokemonCoins,
        isShadowless: req.body.isShadowless
    });
    BindCard.addCard(newCard, (err, card) => {
        if(err) {
            res.json({ success: false, message:'Failed to register new binder.'});
        } else {
            res.json({ success: true, message:'New binder registered.'});
        }
    });
});