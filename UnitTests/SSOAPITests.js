import axios from 'axios'
import { json } from 'stream/consumers'


async function testRegistration(){
    const data = {
        "username":"test1@latech.edu",
        "password":"test1",
        "first":"first",
        "last":"last",
        "studentID":"123-45-678"
    }
    // json(data)
    axios.post('localhost:3002/sso/registration', data)
    .then((res) => {
        console.log(res)
    })
    
}

export default {testRegistration}