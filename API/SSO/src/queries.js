import pool from './config.js'
import mysql from 'mysql'
import argon2 from 'argon2'
import { randomUUID } from 'crypto';



async function register(data){

    return new Promise(async (res, rej) => {

        pool.getConnection((err, connection) => {
            if (err){
                console.log(err);
                rej(500);
            }else{
                //First Query: make sure account with given username doesn't exist already.
                var sql = "SELECT Login_User FROM Login WHERE Login_User = ? ;";
                var insert = [data.username];
                sql = mysql.format(sql, insert);
                connection.query(sql, (err, result) => {
                    if (result.length > 0){
                        connection.release();
                        rej(400);
                    }else{
                        let uuid = randomUUID()
                        sql = "INSERT INTO Student VALUES (?, ?, ?, NULL);" 
                        insert = [uuid, data.first, data.last] 
                        sql = mysql.format(sql, insert)
                        connection.query(sql, async (err, result) =>{
                            if(err){
                                console.log(err);
                                rej(500);
                            }else{
                                //Hash the submitted password. salt is generated randomly.
                                const promise = argon2.hash(data.password, { hashLength: 128});
                                let hash = await promise;
                                //Third Query: Insert new row into login table. 
                                sql = "INSERT INTO Login VALUES (?, ?, ?);"
                                insert = [data.username, hash, uuid]
                                sql = mysql.format(sql, insert)
                                connection.query(sql, (err, result) => {
                                    if(err){
                                        console.log(err);
                                        rej(500);
                                    }
                                    connection.release();
                                    res(200);
                                })
                            }
                        })

                    }
                })
            }
            
        })

    });
   
}

async function login(data){

    return new Promise((res, rej) => {
        pool.getConnection((err, connection) => {
            if(err) {
                rej(err);
            }else{
                //First Query: Look for given username and grab all fields.
                let sql = "SELECT * FROM Login WHERE Login_User = ?;"
                let insert = [data.username]
                sql = mysql.format(sql, insert)
                connection.query(sql, async (err, result, fields) => {
                    if (err) {
                        rej(500)
                        console.log(err)
                    }else if (result.length == 1){
                        //Authenticate given password with hashed password in database. 
                        let auth = await argon2.verify(result[0].Login_Pass, data.password)
                        if(auth){
                            res(result[0].Student_Student_ID)
                        }else{
                            rej(400)
                        }
                    }
                })
            }
        })
    });

}

export { register, login }