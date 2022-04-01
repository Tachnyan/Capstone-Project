import mysql from 'mysql';

const pool = mysql.createPool({
    connectionLimit: 1000,
    password: 'root', 
    user: 'root', 
    database: 'studygroupdb', 
    host: 'localhost', 
    port: '3306'
});

function friends(){

    return new Promise((resolve, reject) => {
        pool.query('SELECT Student_First, Student_Last FROM student WHERE Student_ID IN (SELECT Student_Friended_ID FROM student_has_friend WHERE Student_User_ID = \'9a8349b3-abf6-11ec-90c1-7c10c952a9ce\')', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });

};

function classmates(){

    return new Promise((resolve, reject) => {
        pool.query('SELECT student_first, student_last FROM student WHERE Student_ID IN (SELECT student_student_id from student_has_course WHERE Course_Course_ID IN (SELECT Course_Course_ID FROM student_has_course WHERE Student_Student_ID = \'9a8349b3-abf6-11ec-90c1-7c10c952a9ce\'))', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });

};

function profile(){

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM student WHERE Student_ID = \'9a8349b3-abf6-11ec-90c1-7c10c952a9ce\'', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

function studygroups(){

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM studygroup', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });

};

export {friends, classmates, profile, studygroups};