

import express from "express"

import { getNotes, createNote, deleteNote, getNote, updateNote } from "../controllers/CNotes.js";



const router = express.Router()

router.route("/").get(getNotes).post(createNote)

router.route("/:id").get(getNote).put(updateNote).delete(deleteNote)


export default router