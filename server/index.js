import express from "express"
import cors from "cors"
import blogsRoute from "./routes/blogsRoute.js"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/blogs", blogsRoute)

app.get("/", (req, res)=> {
res.send("hello get API")
})

const connectDB = async ()=> {
await mongoose.connect(process.env.MONGO_URI)
}

connectDB()

if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

export default app;