const Contact = require("../models/Contact")


const createContact = async (req, res) => {

try {
    const {firstName, email, message} = req.body;
    // Validate the data
    if (!firstName ||!email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Save the contact to the database
    const savedContact = await Contact.create({
        firstName,
        email,
        message,
    });

    res.status(201).json({
        message: 'Form sent successfully',
        contact: savedContact,
    });
} catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'An error occurred while sending the form.' });
}
};

// Controller to fetch all contacts
const fetchAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


module.exports = { createContact,  fetchAllContacts}

   
    