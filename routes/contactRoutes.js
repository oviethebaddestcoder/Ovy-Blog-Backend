const express = require ("express");
const {createContact, fetchAllContacts} = require("../controllers/contactController.js")



//create router binstance from express
const router = express.Router();

//define your endpoint route
router.post("/api/create-contact", createContact);
router.get("/api/fetchall", fetchAllContacts);

//export router
module.exports = router;