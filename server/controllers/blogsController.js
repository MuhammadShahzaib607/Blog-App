import blogWebsites from "../models/Blogs.js"

export const createBlogWebsite = async (req, res)=> {
try {
    const {title, subTitle, blogs} = req.body
    if (title === "" || subTitle === "") {
        res.status(400).json({
            status: false,
            message: "missing fiellds"
        })
    }
const newBlogs = new blogWebsites({
    title,
    subTitle,
    blogs,
})
await newBlogs.save()
res.status(200).json({
    status: true,
    message: "data saved successfully"
})
} catch (error) {
   res.status(400).json({
    status: false,
    message: "something went wrong",
    error: error
   })
}
}

export const getBlogs = async (req, res)=> {
    try {
        const blogWebsite = await blogWebsites.find()
        res.status(200).json({
            status: true,
            message: "blogs Get succcessfully",
            blogWebsites: blogWebsite,
        })
    } catch (error) {
      res.status(400).json({
    status: false,
    message: "something went wrong",
    error: error.message
   })  
    }
}

export const createBlog = async (req, res)=> {
try {
    const id = req.params.id
    const {title, content} = req.body
    const Blog = await blogWebsites.findByIdAndUpdate(
        id, 
        {
            $push: {
blogs: {title, content}
        }
        },
        {new: true}
    )
    res.status(200).json({
        status: true,
        message: "blog Create Successfully",
    })
} catch (error) {
          res.status(400).json({
    status: false,
    message: "something went wrong",
    error: error.message
   })  
}
}

export const getSingleBlogPage = async (req, res)=> {
    try {
        const {id} = req.params
       const sigleBlogWeb = await blogWebsites.findById(id)
       res.status(200).json({
        status: true,
        message: "blog get successfully",
        blog: sigleBlogWeb
       })
    } catch (error) {
          res.status(400).json({
    status: false,
    message: "something went wrong",
    error: error.message
   })  
    }
}