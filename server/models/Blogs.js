import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    blogs: {
        type: Array,
    }
})

const blogWebsites = mongoose.model("BlogWebsite", blogSchema)

export default blogWebsites