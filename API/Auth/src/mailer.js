const nodemailer = require("nodemailer");

const user = "studybuddywebsiteapp@gmail.com";
const pass = "Studious!2";

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user: user,
        pass: pass,
    },
});

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
    console.log("Confirmation mail sent");
    transport.sendMail({
        from: user,
        to: email,
        subject: "Study Buddy - Confirm Email",
        html: `
            <h1>Email Confirmation</h1>
            <h2>Hello ${name}</h2>
            <p>Thank you for joining Study buddy. In order to complete registering your account, please click the following link</p>
            <a href=https://localhost:3002/confirm/${confirmationCode}> Click here!</a>
        `
    })
}