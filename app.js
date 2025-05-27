const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
 
//Routes
app.use(express.static('public'))

app.post('/enviar-email', (req, res) => {
    const userName = req.body.userName
    const userEmail = req.body.userEmail
    const userMessage = req.body.userMessage

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.STANDARD_EMAIL,
            pass: process.env.APP_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: {
            name: userName,
            address: userEmail
        },
        to: [process.env.STANDARD_EMAIL],
        subject: "E-mail do Portfólio!",
        html: `<b>Email do Sender (Remetente):</b> ${userEmail} <br/> ${userMessage}`,
    }

    const sendMail = async (transporter, mailOptions) => {
        try {
            await transporter.sendMail(mailOptions)
            console.log('email has been sent')
            res.redirect('/agradecimento')
        } catch (error) {
            console.error(error)
        }
    }
    sendMail(transporter, mailOptions)
})

app.get('/agradecimento', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'thank-you.html'))
})

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html#projects'))
})

app.get('/about-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html#about-me'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html#contact'))
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})