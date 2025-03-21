const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // Remove or comment out unique if it's set here:
    // unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  postDate: {
    type: Date,
    default: Date.now,
  },

})

// Create a sparse unique index on firstName
ContactSchema.index({ firstName: 1 });

ContactSchema.index({ email: 1 });

module.exports = mongoose.model("Contact", ContactSchema);
