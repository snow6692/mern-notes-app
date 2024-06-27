import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "Please provide a user"]
    }
    ,
    title: {
        type: String,
        required: [true, "Pleas provide a title"],
        maxLenght: [40, "Title cannot be more than 40 characters"]
    },
    decription: {
        type: String,
        required: [true, "Please provide a description"],
        maxLenght: [200, "Description cannot be more than 200 characters"]
    },
    color: {
        type: String,
        default: "#fff",

    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


export default mongoose.model("Note", NoteSchema)