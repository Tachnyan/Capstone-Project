import express from 'express';
import {friends, classmates, profile, studygroups, addfriend, ignoreuser, addcourse, studentcourses,setpreferredname, friendrequests} from '../db/index.js'

var router = express.Router();

router.get('/friends', async (req, res, next) => {

    try{
        let results = await friends(req.query);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }

});

router.get('/profile', async (req, res, next) => {

    try{
        let results = await profile(req.query);
        res.json(results);

    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }

});

router.get('/classmates', async (req, res, next) => {

    try{
        let results = await classmates(req.query);
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

router.get('/friendrequests', async(req,res,next) => {

    try{
        let results = await friendrequests(req.query);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
})

router.post('/addfriend', async(req, res, next)=>{
    
    try{
        req.body.userID = req.query.userID;
        let results = await addfriend(req.body);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

router.post('/ignoreuser', async(req, res, next)=>{
    
    try{
        req.body.userID = req.query.userID;
        let results = await ignoreuser(req.body);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

router.post('/addcourse', async(req, res, next)=>{
    try{
        let results = await addcourse(req.body);
        res.json(results);

    }catch(e){
        res.sendStatus(500);
        console.log(e)
    }
    
})
router.post('/setpreferredname', async(req, res, next)=>{
    
    try{
        let results = await setpreferredname(req.body);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

router.post('/deletecourse', async(req, res, next)=>{
    try{
        let results = await deletecourse(req.body);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

router.get('/studentcourses', async(req, res, next)=>{  
    try{
        let results = await studentcourses(req.body);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});


export default router;