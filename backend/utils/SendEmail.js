const nodemailer = require('nodemailer');


const SendEmail = async (options) => {
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    // Define the email options
    const mailOptions = {
        from: process.env.SMTP_EMAIL, // Sender address
        to: options.email, // Recipient address
        subject: options.subject, // Subject line
        html: options.message // Plain text body
    };

    // Actually send the email
    await transport.sendMail(mailOptions);
}

module.exports = SendEmail;