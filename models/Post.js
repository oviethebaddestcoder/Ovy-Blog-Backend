const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    // define field and characteristic
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    author: String,
    category: String,
    postDate: {
        type: Date,
        default: Date.now
    },
    tags: [String],  // [tags1, tags2, tags3]
likes: {
    type: Number,
    default: 0
}
});

// export model
module.exports = mongoose.model('Post', PostSchema);
