import { pool } from './config.js'
import mysql from 'mysql'
import argon2 from 'argon2'
import { randomUUID, createHash, randomInt, randomBytes } from 'crypto';
import axios from 'axios';

import mailer from './mailer.js'
import { response } from 'express';

async function register(data){

    return new Promise(async (res, rej) => {
        try
        {

            
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
                                //create verification code for email
                                const vCode = randomBytes(32).toString('hex');
                                //create expiration date of code
                                var expirationDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
                                //Third Query: Insert new row into login table. 
                                sql = "INSERT INTO Login VALUES (?, ?, ?, ?, ?, ?);"
                                insert = [data.username, hash, uuid, 0, vCode, expirationDate]
                                sql = mysql.format(sql, insert)
                                connection.query(sql, (err, result) => {
                                    if(err){
                                        console.log(err);
                                        rej(500);
                                    }else{
                                        mailer(data.first, data.username,vCode);
                                        res(200);
                                    }
                                    connection.release();
                                })
                            }
                        })

                    }
                })
            }
            
        })
        
    }catch{

    }
    });
   
}

async function login(data){

    return new Promise((res, rej) => {
        pool.getConnection((err, connection) => {
            if(err) {
                rej(err);
            }else{
                //First Query: Look for given username and grab all fields.
                let sql = "SELECT * FROM Login WHERE Login_User = ? AND active = 1;"
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
            connection.release()
        })
    });

}

async function confirmEmail(data){
    return new Promise((res, rej) => {
        pool.getConnection((err, connection) => {
            if(err) {
                rej(err);
            }else{
                //Query: Update account to active where token matches
                let sql = "UPDATE Login SET active = 1 WHERE Hash_Verification = ?;"
                let insert = [data] //needs to be hashed code
                sql = mysql.format(sql, insert)
                connection.query(sql, async (err, result, fields) => {
                    if (err) {
                        rej(500)
                        console.log(err)
                    }else{
                        let sql = "SELECT Student_First, Student_Last, Login_User, Login_Pass FROM Login AS L LEFT JOIN Student AS S ON S.Student_ID = L.Student_Student_ID WHERE L.Hash_Verification = ?;"
                        let insert = [data]
                        sql = mysql.format(sql, insert)
                        connection.query(sql, async (err, result, fields) => {
                            if (err) {
                                rej(500)
                                console.log(err)
                            }else{
                                var data = {
                                    "username": result[0].Login_User.slice(0, 6),
                                    "secret": result[0].Login_Pass,
                                    "email": result[0].Login_User,
                                    "first_name": result[0].Student_First,
                                    "last_name": result[0].Student_Last
                                };
                                var config = {
                                    method: 'post',
                                    url: 'https://api.chatengine.io/users/',
                                    headers: {
                                        'PRIVATE-KEY': process.env.CHAT_PRIVATE
                                    },
                                    data : data
                                };
        
                                axios(config)
                                .then(function (response){
                                    console.log(JSON.stringify(response.data));
                                })
                                .catch(function(error){
                                    console.log(error);
                                })
                            }
                        })
                        
                    }
                })
            }
        })
    });

}

async function chatLogin(data){
    return new Promise((res, rej)=> {
        pool.getConnection((err, connection) => {
            if(err) {
                rej(err);
            } else {
                let sql = "SELECT Login_User, Login_Pass FROM Login AS L LEFT JOIN Student AS S ON S.Student_ID = L.Student_Student_ID WHERE L.Hash_Verification = ?;"
                let insert = [data]
                sql = mysql.format(sql, insert)
                connection.query(sql, async (err, result, fields) => {
                    if(err){
                        rej(500)
                        console.log(err)
                    } else{
                        let object = {
                            chatUser: result[0].Login_User.slice(0, 6), 
                            chatSecret: result[0].Login_Pass
                        }
                        res(object)
                        response.body = val;
                        response.sendStatus(200);
                    }
                })
            }
        })
    })
}

export { register, login, confirmEmail, chatLogin }