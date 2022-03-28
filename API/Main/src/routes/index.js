import express from 'express';
import db from '../db/index.js'

var router = express.Router();

router.get('/friends', async (req, res, next) => {

    try{
        let results = await db.friends();
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }

});

router.get('/profile', async (req, res, next) => {

    try{
        let results = await db.profile();
        res.json(results);
	console.log("Profile Data Accessed!");
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }

});

router.get('/classmates', async (req, res, next) => {

    try{
        let results = await db.classmates();
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }

});

router.get('/studygroups', async (req, res, next) => {

    try{
        let results = await db.studygroups();
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }

});

export default router;