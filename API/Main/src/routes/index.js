import express from 'express';
import {friends, classmates, profile, studygroups, addfriend, ignoreuser, addcourse, deletecourse, studentcourses,setpreferredname, friendrequests, ignorelist, createstudygroup, unfriend, unignore, acceptfriend, denyfriend} from '../db/index.js'

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

router.get('/friendrequests', async(req, res, next) => {

    try{
        let results = await friendrequests(req.query);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
})

router.get('/ignorelist', async(req, res, next) => {

    try{
        let results = await ignorelist(req.query);
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
        req.body.userID = req.query.userID;
        let results = await addcourse(req.body);
        res.json(results);

    }catch(e){
        res.sendStatus(500);
        console.log(e)
    } 
})
router.post('/setpreferredname', async(req, res, next)=>{
    try{
        req.body.userID = req.query.userID;
        let results = await setpreferredname(req.body);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

router.post('/deletecourse', async(req, res, next)=>{
    try{
        req.body.userID = req.query.userID;
        let results = await deletecourse(req.body);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

router.get('/studentcourses', async(req, res, next)=>{  
    try{
        req.body.userID = req.query.userID;
        let results = await studentcourses(req.body);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

router.post('/createstudygroup', async(req, res, next)=>{
    try{
        req.body.userID = req.query.userID;
        let results = await createstudygroup(req.body);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

router.post('/unfriend', async(req, res, next) =>{
    try{
        let results = await unfriend(req.body, req.query.id);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

router.post('/unignore', async(req, res, next) =>{
    try{
        let results = await unignore(req.query);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

router.post('/denyfriend', async(req, res, next) =>{
    try{
        let results = await denyfriend(req.body, req.query.id);
        res.json(results);
        res.redirect('/app/Social')
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

router.post('/acceptfriend', async(req, res, next) =>{
    try{
        let results = await acceptfriend(req.body, req.query.id);
        res.json(results);
    } catch(e){
        res.sendStatus(500);
        console.log(e);
    }
});

export default router;