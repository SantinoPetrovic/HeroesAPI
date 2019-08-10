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

const Binder = require('../models/binder');

router.post('/getbinder', (req, res, next) => {
    const id = req.body.id;
    console.log(id);
    Binder.getBinder(id, (err, binderres) => {
        if(err) throw err;
        if(!binderres) {
            return res.json({success: false, msg: "Binder not found"});
        }

        res.json({success: true, binder: binderres});
    });
});

router.post('/postbinder', (req, res, next) => {
    let newBinder = new Binder ({
        id: req.body.id,
        pockets: req.body.pockets
    });
    Binder.addBinder(newBinder, (err, binder) => {
        if(err) {
            res.json({ success: false, message:'Failed to register new binder.'});
        } else {
            res.json({ success: true, message:'New binder registered.'});
        }
    });
});

module.exports = router;