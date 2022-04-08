import express from 'express';
import {friends, classmates, profile, studygroups, addfriend} from '../db/index.js'

var router = express.Router();

router.get('/friends', async (req, res, next) => {

    try{
        let results = await friends();
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }

});

router.get('/profile', async (req, res, next) => {

    try{
        let results = await profile();
        res.json(results);
	console.log("Profile Data Accessed!");
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }

});

router.get('/classmates', async (req, res, next) => {

    try{
        let results = await classmates();
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }

});

router.get('/studygroups', async (req, res, next) => {

    try{
        let results = await studygroups();
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }

});

router.post('/addfriend', async(req, res, next)=>{
    
    try{
        let results = await addfriend(req.body);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

export default router;