const {noteService, noteArchiveService} = require("../services");
const {code, errorMessage} = require("../errors");


module.exports = {
    getAllNotes: async (req, res, next) => {
        try {
            const allNotes = await noteService.getAllItems();

            res.json(allNotes);
        } catch (e) {
            next(e);
        }
    },
    getAllArchiveNotes: async (req, res, next) => {
        try {
            const allNotes = await noteArchiveService.getAllArchiveItems();

            res.json(allNotes);
        } catch (e) {
            next(e);
        }
    },
    getSingleNote: (req, res, next) => {
        try {
            res.json(req.note);
        } catch (e) {
            next(e);
        }
    },
    createNote: async (req, res, next) => {
        try {
            const noteBody = req.body;
            let content = req.body.content;
            let date = noteBody.content.split(' ').filter(value =>
                value?.includes('/') && value.length <= 10 && value.length >= 8)

            if (date.length > 0) {
                const slice = content.slice(0, content.indexOf([...date][0]))
                content = slice + content.slice(content.indexOf([...date][0]) + date[0].length);
            }
            if (req.body.dates) {
                await noteService.createItem(noteBody);
                res.status(code.CREATE).json(errorMessage.ok);
                return;
            }
            const note = {...noteBody, dates: date, content}
            await noteService.createItem(note);
            res.status(code.CREATE).json(errorMessage.ok);
        } catch (e) {
            next(e);
        }
    },
    createArchiveNote: async (req, res, next) => {
        try {
            const note = req.body

            await noteArchiveService.createArchiveItem(note);

            res.status(code.CREATE).json(errorMessage.ok);
        } catch (e) {
            next(e);
        }
    },
    deleteNote: async (req, res, next) => {
        try {
            const id = req.params.note_id

            await noteService.deleteOneItem({_id: id});

            res.sendStatus(code.DELETE);
        } catch (e) {
            next(e);
        }
    },
    deleteArchiveNote: async (req, res, next) => {
        try {
            const id = req.params.note_id

            await noteArchiveService.deleteArchiveOneItem({_id: id});

            res.sendStatus(code.DELETE);
        } catch (e) {
            next(e);
        }
    },
    updateNote: async (req, res, next) => {
        try {
            const {note_id} = req.params;
            let content = req.body.content;

            let date = content.split(' ').filter(value =>
                value?.includes('/') && value.length <= 10 && value.length >= 8);

            if (date.length > 0) {
                const slice = content.slice(0, content.indexOf([...date][0]))
                content = slice + content.slice(content.indexOf([...date][0]) + date[0].length);

            }

            await noteService.updateItem({_id: note_id}, { $addToSet: {dates: date[0]}, content: content});

            res.status(code.CREATE).json(errorMessage.ok);
        } catch (e) {
            next(e);
        }
    }
}
