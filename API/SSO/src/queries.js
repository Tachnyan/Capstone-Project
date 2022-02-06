import pool from './config.js'
import mysql from 'mysql'
import argon2 from 'argon2'



async function register(data){

    return new Promise(async (res, rej) => {

        var sql = "SELECT Login_User FROM Login WHERE Login_User = ? ;";
        var insert = [data.username];
        sql = mysql.format(sql, insert);

        const promise = argon2.hash(data.password, { hashLength: 128});
        let hash = await promise;

        pool.getConnection((err, connection) => {
            if (err){
                console.log(err);
                rej(500);
            }
            connection.query(sql, (err, result, fields) => {
                if (result.length > 0){
                    connection.release();
                    rej(400);
                }
            })
    
            sql = "INSERT INTO student VALUES (?, ?, ?, NULL);" 
            insert = [data.studentID, data.first, data.last] 
            sql = mysql.format(sql, insert)
            
            connection.query(sql, (err, result) =>{
                if(err){
                    console.log(err);
                    rej(500);
                }
                console.log(result)
            })
    
            sql = "INSERT INTO login VALUES (?, ?, ?);"
            insert = [data.username, hash, data.studentID]
            sql = mysql.format(sql, insert)
            connection.query(sql, (err, result) => {
                if(err){
                    console.log(err)
                    rej(500)
                }
                connection.release()
                res(200)
            })
            
        })

    });
   
}

async function login(data){

    return new Promise((res, rej) => {
        pool.getConnection((err, connection) => {
            if(err) rej(500);
            
            let sql = "SELECT * FROM login WHERE Login_User = ?;"
            let insert = [data.username]
            console.log(data.username)
            sql = mysql.format(sql, insert)
            connection.query(sql, (err, result, fields) => {
                if (err) {
                    rej(500)
                    throw err;
                }
                console.log(result)
                res(200);
                connection.release()
            })
        })
    });

}

export { register, login }