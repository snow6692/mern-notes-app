import expres from "express";

import dotenv from "dotenv";
import morgan from "morgan";
import notes from "./routes/notes.js";
import { connectDB } from "./config/db.js";
import e from "express";


dotenv.config({ path: './config/config.env' })

const app = expres()

app.use(expres.json())
app.use(morgan("dev"))


app.use("/notes", notes)
connectDB()
app.listen(8000, () => {
    try {
        connectDB()
        console.log("Server is up on port 8000")
        console.log("connected to DB")

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
})

