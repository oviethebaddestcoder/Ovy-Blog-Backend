const express = require ("express");
//import all controllers function
const {createPost, fetchAllPost, getSinglePost, searchByCategory, deletePost, updatePost} = require("../controllers/postControllers");

//create router binstance from express
const router = express.Router();

//define your endpoint route
router.post("/api/create-post", createPost);
router.get("/api/fetch-All", fetchAllPost);
router.get("/api/post/:id", getSinglePost);
router.put("/api/update-post/:id", updatePost);
router.get("/api/search/:category", searchByCategory);
router.delete("/api/delete-post/:id", deletePost);


//export router
module.exports = router;