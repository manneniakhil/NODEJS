//1. import nodemailer

const nodemailer=require('nodemailer');
const readline=require('readline');
//configure interface to connect with terminal
const k=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

//Function to prompt for user input
async function prompt(question){
    return new Promise((resolve)=>{
        k.question(question,(input)=>resolve(input));
    });

}

//2.configure and send it

async function sendMail(senderEmail,senderPassword,recieverEmail){

    //1. Create an email transporter
    //SMTP-simple mail transport protocol
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user:senderEmail,
            pass:senderPassword,
        },
    });

   // 2. Configure mail content
   const mailOptions={
    from:senderEmail,
    to:recieverEmail,
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

//Main function to execute the flow
async function main(){
    const senderEmail= await prompt("Enter sender email: ");
    const senderPassword= await prompt("Enter password: ");
    const recieverEmail=await prompt("Enter reciever Email: ")

    k.close();
    await sendMail(senderEmail,senderPassword,recieverEmail);
}
main().catch(console.error);
