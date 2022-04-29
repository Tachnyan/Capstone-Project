import mysql from 'mysql';
import { format, resolve } from 'path';
import { pool } from '../config.js'
import axios from 'axios';



function friends(data){
    
    return new Promise((resolve, reject) => {
        let sql = `SELECT Student_ID, Student_First, Student_Last FROM Student 
                   WHERE Student_ID IN (SELECT Student_Friended_ID FROM Student_Has_Friend WHERE Student_User_ID = ?)`
        let insert = [data.userID]
        sql = mysql.format(sql, insert)

        pool.query(sql, (err, results) => {

            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });

};

function classmates(data){
    return new Promise((resolve, reject) => {
        let sql = `SELECT Student_First, Student_Last
                   FROM Student 
                   WHERE Student_ID IN (SELECT Student_Student_ID from Student_Has_Course WHERE Course_Course_ID IN (SELECT Course_Course_ID FROM Student_Has_Course WHERE Student_Student_ID = ?) AND Student_Student_ID != ?)`
        let insert = [data.userID, data.userID]
        sql = mysql.format(sql, insert)
        pool.query(sql, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

function profile(data){
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM Student WHERE Student_ID = ?`
        let insert = [data.userID]
        sql = mysql.format(sql, insert)
        pool.query(sql, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

function studygroups(){
    return new Promise((resolve, reject) => {
        var sql = `SELECT Studygroup_ID, Course_Subject, Course_Number, Course_Section, Studygroup_Location, Studygroup_Material, COUNT(DISTINCT SHS.Student_Student_ID) AS Student_Count, Studygroup_Start, Studygroup_End 
                   FROM Studygroup_Has_Student AS SHS, Studygroup, Course, Studygroup_Has_Course AS SHC 
                   WHERE SHS.Studygroup_Studygroup_ID = Studygroup_ID AND SHC.Studygroup_Studygroup_ID = Studygroup_ID AND Course_Course_ID = Course_ID
                   GROUP BY Studygroup_ID;`;
        pool.query(sql, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};



function addfriend(data){
    return new Promise((resolve, reject) => {
        //Query 1: Check if they don't have that person friended already
        var sql = `SELECT * FROM Student_Has_Friend WHERE Student_User_ID = ? AND Student_Friended_ID = (SELECT Student_Student_ID FROM Login WHERE Login_User = ?)`;
        var insert = [data.userID, data.friendUsername];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(results.length > 0){
                reject(500);
            }
            else{
                //Query 2: Check if they have already sent a friend request
                sql = `SELECT * FROM Student_Has_Pending WHERE Student_User_ID = ? 
                AND Student_Pending_ID = (SELECT Student_Student_ID FROM Login WHERE Login_User = ?)`;
                insert = [data.userID, data.friendUsername];
                sql = mysql.format(sql, insert)
                pool.query(sql, (err, results) => {
                    if(results.length > 0){
                        reject(500);
                    }
                    else{
                        //Query 2: Send Friend Request
                        sql = `INSERT INTO Student_Has_Pending 
                                   VALUES (?, (SELECT Student_ID FROM Student WHERE Student_ID = ?), (SELECT Student_Student_ID FROM Login WHERE Login_User = ?));`;
                        insert = [null, data.userID, data.friendUsername];
                        sql = mysql.format(sql, insert);
                        pool.query(sql, (err, results) => {
                            if(err){
                                return reject(err);
                            }
                            else{
                                return resolve(results);
                            };
                        });
                    }
                });
            }
        });
    });
};


function ignoreuser(data){
    return new Promise((resolve, reject) => {
        //Query 1: Check if they are already ignored
        var sql = `SELECT * FROM Student_Has_Blocked WHERE Student_User_ID = ? AND Student_Blocked_ID = (SELECT Student_Student_ID FROM Login WHERE Login_User = ?)`
        var insert = [data.userID, data.ignoreUsername];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(results.length > 0){
                reject(500);
            }
            else{
                //Query 2: Ignore the user
                sql = `INSERT INTO Student_Has_Blocked
                        VALUES (?, (SELECT Student_ID FROM Student WHERE Student_ID = ?), (SELECT Student_Student_ID FROM Login WHERE Login_User = ?));`;
                insert = [null, data.userID, data.ignoreUsername];
                sql = mysql.format(sql, insert);
                pool.query(sql, (err, results) => {
                    if(err){
                        reject(err);
                    }
                    else{
                        resolve(200);
                    };
                });
            }
        })
    });
};

function addcourse(data){
    return new Promise((resolve, reject) =>{
        var sql = `SELECT * FROM Student_Has_Course WHERE Student_Student_ID = ? AND Course_Course_ID = ?;`
        var insert = [data.userID, data.courseID];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(results.length > 0){
                reject(500);
            }
            else{
                //Query 2: Insert into student has course
                sql = `INSERT INTO Student_Has_Course VALUES(?, (SELECT Student_ID FROM Student WHERE Student_ID = ?), (SELECT Course_ID FROM Course WHERE Course_ID = ?));`
                insert = [null, data.userID, data.courseID];
                sql = mysql.format(sql, insert);
                pool.query(sql, (err, results) => {
                    if(err){
                        reject(err);
                    }
                    else{
                        resolve(200);
                    };
                });
            };
        });
    });
}

function setpreferredname(data){
    return new Promise((resolve, reject) => {
        var sql = `UPDATE Student SET Student_Preferred = ? WHERE Student_ID = ?`;
        var insert = [data.preferredName, data.userID];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                reject(err);
            }
            else{
                resolve(200);
            };
        });
    });
}

function studentcourses(data){
    return new Promise((resolve, reject) => {
        var sql = `SELECT Course_ID, Course_Subject, Course_Number, Course_Section, Course_Instructor
                   FROM Student_Has_Course, Course 
                   WHERE Student_Student_ID = ? AND Course_ID = Course_Course_ID`;
        var insert = [data.userID];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                reject(err);
            }
            else{
                resolve(results);
            };
        });
    });
}

function deletecourse(data){
    return new Promise((resolve, reject) => {
        var sql = `DELETE FROM Student_Has_Course WHERE Student_Student_ID = ? AND Course_Course_ID = ?`;
        var insert = [data.userID, data.courseID];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) =>{
            if(err){
                reject(err);
            }
            else{
                resolve(200);
            };
        });
    });
}

function friendrequests(data){
    return new Promise((resolve, reject) =>{
        var sql = 'SELECT Student_ID, Student_First, Student_Last FROM Student WHERE Student.Student_ID IN (SELECT Student_User_ID FROM Student_Has_Pending WHERE Student_Pending_ID = ?);'
        var insert = [data.userID];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                reject(err);
            }
            else{
                resolve(results);
            };
        });
    });
}

function ignorelist(data){
    return new Promise((resolve, reject) =>{
        var sql = 'SELECT Student_ID, Student_First, Student_Last FROM Student WHERE Student_ID IN (SELECT Student_Blocked_ID FROM Student_Has_Blocked WHERE Student_User_ID = ?);'
        var insert = [data.userID];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                reject(err);
            }
            else{
                resolve(results);
            };
        });
    });
}

function createstudygroup(data){
    return new Promise((resolve, reject) =>{
        //This is the part where the room will be made with chatengine first
        //The id will be obtained from the json and put into the id field
        axios.post('https://api.chatengine.io/chats/', {title: data.Studygroup_Material}, {headers: {
            "Public-Key": process.env.CHAT_ID,
            "User-Name": process.env.CHAT_USER,
            "User-Secret": process.env.CHAT_SECRET
        }})
        .then((response) => {
            //callback && callback(response.data);
            if(response.status == 201)
            {
                data.Studygroup_ID = response.data.id
                var sql = `SELECT Course_Subject, Course_Number, Course_Section
                        FROM Course
                        WHERE Course_Subject = ? AND Course_Number = ? AND Course_Section = ?`;
                var insert = [data.Course_Subject, data.Course_Number, data.Course_Section];
                sql = mysql.format(sql, insert);
                pool.query(sql, (err, result) =>{
                    if(err){
                        reject(err);
                    }else if(result.length == 0){
                        reject(400);
                    }else{
                        var sql = `INSERT INTO Studygroup
                                VALUES(?, ?, ?, ?, ?, ?, (SELECT Student_ID FROM Student WHERE Student_ID = ?))`;
                        var insert = [data.Studygroup_ID, data.Studygroup_Material, data.Studygroup_Location, data.Studygroup_Privacy, data.Studygroup_Start, data.Studygroup_End, data.userID];
                        sql = mysql.format(sql, insert);
                        pool.query(sql, (err, results) => {
                            if(err){
                                reject(err);
                            }else{
                                axios.post(`https://api.chatengine.io/chats/${data.Studygroup_ID}/people/`, {username: data.user}, {headers: {
                                    "Public-Key": process.env.CHAT_ID,
                                    "User-Name": process.env.CHAT_USER,
                                    "User-Secret": process.env.CHAT_SECRET
                                }})
                                .then((response) => {
                                    if(response.status == 201)
                                    {
                                        var sql = `INSERT INTO Studygroup_Has_Student
                                                VALUES(?, (SELECT Studygroup_ID FROM Studygroup WHERE Studygroup_ID = ?), (SELECT Student_ID FROM Student WHERE Student_ID = ?))`;
                                        var insert = [null, data.Studygroup_ID, data.userID];
                                        sql = mysql.format(sql, insert);
                                        pool.query(sql, (err, results) => {
                                            if(err){
                                                reject(err);
                                            }else{
                                                var sql = `INSERT INTO Studygroup_Has_Course
                                                        VALUES(?, (SELECT Studygroup_ID FROM Studygroup WHERE Studygroup_ID = ?), (SELECT Course_ID FROM Course WHERE Course_Subject = ? AND Course_Number = ? AND Course_Section = ?))`;
                                                    var insert = [null, data.Studygroup_ID, data.Course_Subject, data.Course_Number, data.Course_Section];
                                                    sql = mysql.format(sql, insert);
                                                    pool.query(sql, (err, results) => {
                                                        if(err){
                                                            reject(err);
                                                        }else{
                                                            resolve(200);
                                                        }
                                                    });
                                            };
                                        });
                                    }
                                })
                                .catch((err) => {
                                    reject(err);
                                })
                            }
                        });
                    }   
                });
            }
        })
        .catch((err) => {
            reject(err);
        })   
    });
}

function unfriend(data){
    return new Promise((resolve, reject) => {
        var sql = `DELETE FROM Student_Has_Friend WHERE Student_User_ID = ? AND Student_Friended_ID = ?`;
        var insert = [data.userID, data.id];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                reject(500);
            }else{
                sql = `DELETE FROM Student_Has_Friend WHERE Student_User_ID = ? AND Student_Friended_ID = ?`;
                insert = [data.id, data.userID];
                sql = mysql.format(sql, insert);
                pool.query(sql, (err, results) => {
                    if(err){
                        reject(500)
                    }
                    else{
                        resolve(200);
                    }
                })
            }
        });
    })
}

function unignore(data){
    return new Promise((resolve, reject) => {
        var sql = `DELETE FROM Student_Has_Blocked WHERE Student_User_ID = ? AND Student_Blocked_ID = ?`;
        var insert = [data.userID, data.id];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                reject(500);
            }else{
                results.resolve(200)
            }
        });
    })
}

function acceptfriend(data){
    return new Promise((resolve, reject) => {
        var sql = `DELETE FROM Student_Has_Pending WHERE Student_User_ID = ? AND Student_Pending_ID = ?`;
        var insert = [data.id, data.userID];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                console.log(err)
                reject(500);
            }else{
                sql = `INSERT INTO Student_Has_Friend VALUES (null, (SELECT Student_ID FROM Student WHERE Student_ID = ?), (SELECT Student_ID FROM Student WHERE Student_ID = ?))`
                insert = [data.userID, data.id];
                sql = mysql.format(sql, insert);
                pool.query(sql, (err, results) => {
                    if(err){
                        console.log(err)
                        reject(500);
                    }
                    else{
                        sql = `INSERT INTO Student_Has_Friend VALUES (null, (SELECT Student_ID FROM Student WHERE Student_ID = ?), (SELECT Student_ID FROM Student WHERE Student_ID = ?))`
                        insert = [data.id, data.userID];
                        sql = mysql.format(sql, insert);
                        pool.query(sql, (err, results) =>{
                            if(err){
                                console.log(err)
                                reject(500);
                            }
                            else{
                                resolve(200);
                            }
                        })
                    }
                })
            }
        });
    })
}

function denyfriend(data){
    return new Promise((resolve, reject) => {
        var sql = `DELETE FROM Student_Has_Pending WHERE Student_User_ID = ? AND Student_Pending_ID = ?`;
        var insert = [data.id, data.userID]
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                reject(500);
            }else{
                results.resolve(200);
            }
        });
    })
}


export {friends, classmates, profile, studygroups, addfriend, ignoreuser, addcourse, deletecourse, setpreferredname, studentcourses, friendrequests, ignorelist, createstudygroup, unfriend, unignore, acceptfriend, denyfriend};
