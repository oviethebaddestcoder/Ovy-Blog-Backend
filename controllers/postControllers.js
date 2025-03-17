// import our post model 
const Post = require("../models/Post.js");

// create new post controller
const createPost = async (req, res) => {
    // extract post data from the body
    // check if all data are available
    // create post object
    // create post documents and save
    // send response

    try {
        const { title, content, category, tags } =
            req.body;

        if (!title || !content || !category || !tags) {
            return res.status(404).json("All field are required")
        }
        
        // create post object 
        const postObj = {
            title,
            content,
            category,
            tags
        }
        const newPost = new Post(postObj);
        const savedPost =  await newPost.save();
        res.status(201).json({ message: "Post created successfully", post: savedPost });
    } catch (error) {
        res.status(500).json(error.message);
    }
        };
        


        //fetch all post controller
        const fetchAllPost = async (req, res) =>{
            try {
                //fetch all post database
                const posts = await Post.find();
                res.status(200).json({ message: "All post fetched", data: posts});
                
            } catch (error) {
                res.status(500).json(error.message);
            }
        }


        // fetch by id
        const getSinglePost = async (req, res) => {
            try {
                // extract id from req.params
                const {id} = req.params;
                //find the post by id
                const post = await Post.findById(id);
                //check if code not found
                if (!post) return res.status(404).json("Sorry post not found");
                res.status(200).json({ message: "single post fetched", post: post});
            } catch (error) {
                res.status(500).json(error.message);
            }
        }


        // fetch by category
        const searchByCategory = async (req, res) => {
            try {
                //search for post
                const {category} = req.params;
                const posts = await Post.find({category: category});
                // chect if post is found
                if (posts.length < 1) res.status(404).json("No post found")
                // send response to client
                res.status(200).json({message: "search successful", data: posts});
            } catch (error) {
                res.status(500).json(error.message);
            }
        }




    //delete post
    const deletePost = async  (req, res) => {
        try {
            const {id} = req.params;
            const deletedPost = await post.findByIdAndDelete(id);
            if (!deletedPost) return res.status(404).json("Post not found and nothing deleted");
            res.status(200).json("Post deleted successfully")
        } catch (error) {
            res.status(500).json(error.message);
        }
    }


    //update post
    const updatePost = async (req, res) => {
        try {
            const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true} );
            if (!updatePost)res.status(404).json("Post not found and nothing to be updated");
            res.status(200).json({message: "Post updated sucessfully", data: updatedPost});
        } catch (error){
            res.status(500).json(error.message)
        }
    }
    


    //export all controllers function
    module.exports = {createPost, fetchAllPost, getSinglePost, searchByCategory, deletePost, updatePost}