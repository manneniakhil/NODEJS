//1. import nodemailer

const nodemailer=require('nodemailer');

//2.configure and send it

async function sendMail(){

    //1. Create an email transporter
    //SMTP-simple mail transport protocol
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user:'akhilmanneni@gmail.com',
            pass:'wtlo kxoh onog hwsi',
        },
    });

   // 2. Configure mail content
   const mailOptions={
    from:'akhilmanneni@gmail.com',
    to:'manneniakhil@gmail.com',
    subject: 'Welocome to Nodejs App',
    text:'This is a email using nodemailer in Node.js',
   };

   //3. send mail
   try{
    const result= await transporter.sendMail(mailOptions);
    console.log('Email sent sucessfully')
   }
   catch(err){
    console.log("Email sent failed with err"+err);
   }

}

sendMail();