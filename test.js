import test from "ava";
import axios from 'axios'

test.serial('Test Register', async (t) => {
    let data = {
        username:"test@latech.edu",
        password:"test",
        first:"first",
        last:"last",
        studentID:"123-45-678"
    }
    await axios.post('http://localhost:3002/sso/register', data, {timeout: 2000})
    .then((val) => {
        if(val.status == 200){
            t.pass()
        }
    }).catch((err) => {
        t.fail()
    })
})

test.serial('Test Authetication', async (t) => {
    let data = {
        username:"test@latech.edu",
        password:"test"
    }
    await axios.post('http://localhost:3002/sso/login', data, {timeout: 2000})
    .then((val) => {
        if(val.status == 200){
            t.pass()
        }
    }).catch((err) => {
        t.fail()
    })
})

test.serial('Test Register Rejection', async (t) => {
    let data = {
        username:"test@latech.edu",
        password:"test",
        first:"first",
        last:"last",
        studentID:"123-45-678"
    }
    await axios.post('http://localhost:3002/sso/register', data, {timeout: 2000})
    .then((val) => {
        if(val.status == 200){
            t.fail()
        }
    }).catch((err) => {
        t.pass()
    })
})

test.serial('Test Authentication rejection', async (t) => {
    let data = {
        username:"test@latech.edu",
        password:"test"
    }
    await axios.post('http://localhost:3002/sso/login', data, {timeout: 2000})
    .then((val) => {
        if(val.status == 200){
            t.pass()
        }
    }).catch((err) => {
        t.fail()
    })
})