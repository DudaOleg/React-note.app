const router = require('express').Router();

const {
    noteController: {
        getAllNotes,
        getAllArchiveNotes,
        getSingleNote,
        createNote,
        createArchiveNote,
        deleteNote,
        deleteArchiveNote,
        updateNote,
    }
} = require("../controllers");
const {noteMiddleware: {check, validator}} = require("../middlewares");
const {noteValidator: {create, update}} = require("../validators");


router.post('/archive', validator(create), createArchiveNote);
router.post('/', validator(create), createNote);
router.get('/', getAllNotes);
router.get('/archive', getAllArchiveNotes);
router.get('/:note_id', check, getSingleNote);
router.patch('/:note_id', validator(update), check, updateNote);
router.delete('/:note_id', check, deleteNote);
router.delete('/archive/:note_id', check, deleteArchiveNote);

module.exports = router;
