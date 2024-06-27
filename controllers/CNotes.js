import NotesModel from "../model/notesModel.js";

export const getNotes = async (req, res) => {
    const userId = req.userId;

    try {
        const notes = await NotesModel.find({ userId });
        res.status(200).json({
            success: true,
            data: notes,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
        });
    }
};
export const getNote = async (req, res) => {
    try {
        const note = await NotesModel.findById(req.params.id);
        if (!note) {
            return res.status(400).json({
                success: false,
                error: "No note found",
            });
        }
        res.status(200).json({
            success: true,
            data: note,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

export const createNote = async (req, res) => {
    const userId = req.userId;

    try {
        const note = await NotesModel.create({
            ...req.body,
            userId,
        });
        res.status(201).json({
            success: true,
            data: note,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

export const updateNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(400).json({
                success: false,
                error: "No note found",
            });
        }
        const updatedNote = await NotesModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            success: true,
            data: updatedNote,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const note = await NotesModel.findById(req.params.id);
        if (!note) {
            return res.status(400).json({
                success: false,
                error: "No note found",
            });
        }
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            data: {},
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};