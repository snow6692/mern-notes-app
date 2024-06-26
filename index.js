import expres from "express";

import dotenv from "dotenv";
import morgan from "morgan";


dotenv.config({ path: './config/config.env' })

const app = expres()

app.use(expres.json())
app.use(morgan("dev"))


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(8000, () => {
    console.log("listen port 8000")
})

console.log("hey")