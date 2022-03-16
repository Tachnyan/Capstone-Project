const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 1000,
    password: 'root', 
    user: 'root', 
    database: 'studygroupdb', 
    host: 'localhost', 
    port: '3306'
});

let studygroupdb = {};

studygroupdb.friends = () => {

    return new Promise((resolve, reject) => {
        pool.query('SELECT Student_first, Student_last FROM student WHERE Student_id IN (SELECT Student_Student_ID FROM student_has_friend WHERE Student_Student_ID1 = \'100-20-300\')', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });

};

studygroupdb.classmates = () => {

    return new Promise((resolve, reject) => {
        pool.query('SELECT student_first, student_last FROM student WHERE Student_ID IN (SELECT student_student_id from student_has_course WHERE Course_Course_ID IN (SELECT Course_Course_ID FROM student_has_course WHERE Student_Student_ID = \'100-20-300\'))', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });

};

studygroupdb.profile = () => {

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM student WHERE Student_ID = \'100-20-300\'', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

studygroupdb.studygroups = () => {

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM studygroup', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });

};

module.exports = studygroupdb;