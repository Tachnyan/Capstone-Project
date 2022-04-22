import test from "ava";
import axios from 'axios';

test.serial('Correct Registration', async (t) => {
    let data = {
        Username:"ddd001@latech.edu",
        Password:"Test1!",
        FirstName:"Davy",
        LastName:"Jones",
    }
    await axios.post('http://localhost:3002/auth/register', data, {timeout: 2000})
    .then((val) => {
        if(val.status == 200){
            t.pass()
        }
    }).catch((err) => {
        t.fail()
    })
})

test.serial('Registration Rejection if account exists', async (t) => {
    let data = {
        Username:"ddd001@latech.net",
        Password:"Test1!",
        FirstName:"Davy",
        LastName:"Jones",
    }
    await axios.post('http://localhost:3002/auth/register', data, {timeout: 2000})
    .then((val) => {
        if(val.status == 200){
            t.fail()
        }
    }).catch((err) => {
        t.pass()
    })
})

test.serial('Invalid Email Registration', async (t) => {
    let data = {
        Username: "D#+D@latech.edu",
        Password: "Test1!",
        FirstName: "dddippy",
        LastName: "a"
    }
    await axios.post("http://127.0.0.1:3002/auth/register", data, {timeout: 2000})
    .then((val) => {
        if(val.status == 200){
            t.fail()
        }
    }).catch((err) => {
        t.pass()
    })
})

test.serial('Test Authetication', async (t) => {
    let data = {
        Username:"test@latech.edu",
        Password:"Test1!"
    }
    await axios.post('http://localhost:3002/auth/login', data, {timeout: 5000})
    .then((val) => {
        if(val.status == 200){
            t.pass()
        }
    }).catch((err) => {
        //console.log(err.toJSON())
        t.fail()
    })
})

test.serial('Test Logout', async (t) => {
    await axios.get("http://localhost:3002/auth/logout", {timeout: 5000})
    .then((val) => {
        if(val.status == 200){
            t.pass();
        }
    }).catch((err) => {
        t.fail()
    })
})



test.serial('Test Authentication rejection', async (t) => {
    let data = {
        Username:"ddd001@latech.edu",
        Password:"Test1"
    }
    await axios.post('http://localhost:3002/auth/login', data, {timeout: 2000})
    .then((val) => {
        if(val.status == 200){
            t.fail()
        }
    }).catch((err) => {
        t.pass()
    })
})