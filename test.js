import test from "ava";
import axios from 'axios'

test('a+b', (t) =>{
    t.true(2+2 == 4)
})

test.serial('test login', async (t) => {
    let data = {
        username:"test@latech.edu",
        password:"test"
    }
    await axios.post('localhost:3002/sso/register', data, {timeout: 2000})
    .then((val) => {
        if(val.status == 200){
            t.pass()
        }
    }).catch((err) => {
        t.fail()
    })
})