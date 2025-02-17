const express = require("express");

require("dotenv").config();

const nodemailer = require("nodemailer");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req,res) => {
    const {name,email,message} = req.body;

    const transporter = nodemailer.createTransport({
        service : "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth : {
            user : process.env.EMAIL_USER,//my email
            pass : process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from : email,
        to : process.env.EMAIL_USER,
        subject : `New contact Form Submission from ${name}`,
        text : `Name ${name}\nEmail: ${email}\nMessage : ${message}`
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({Message : "Email sent succesfully"})
    } catch (error) {
        res.status(500).json({Message : "failed to send Email"})
    }
    
})
app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(port,()=> {
    console.log(`Server running on port ${port}`);
})