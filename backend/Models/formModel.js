const mongoose = require('mongoose');

// Define the schema for the form
const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'] // Email validation
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
});

// Create a model from the schema
const Form = mongoose.model('Form', formSchema);

module.exports = Form;
