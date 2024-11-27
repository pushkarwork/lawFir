const Form = require("../Models/formModel");
const SendEmail = require("../utils/SendEmail");


const formData = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Create a new form submission
        const formSubmission = new Form({
            name,
            email,
            phone,
            subject,
            message
        });

        // Save the form submission to the database
        await formSubmission.save();

        await SendEmail({
            email: email,
            subject: "Thankyou for contacting our Law Firm",
            message: `
                <h1>Hello ${name},</h1>
                <p>Thank you for reaching out to us!</p>
                <p>We have received your message and will get back to you soon.</p>
                <br>
                <p>Message Details:</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>
                <br>
                <p>Best Regards,<br>Law Firm</p>
            `, // Customize this message as needed
        })
        await SendEmail({
            email: process.env.SMTP_EMAIL, //OUR FIRMS EMAIL ADDRESS ON WHICH WE HAVE TO RECIEVE THE OFFICIAL EMAILS
            subject: `New Message from !! ${name}`,
            message: `
        <h1>Hello Law Firm,</h1>
        <br>
        <p>Message Details:</p>
        <p>you got an enquiry. Details are below </p> <br>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br>       
    `,
        })
        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting form', error: error.message });
    }
};

module.exports = formData