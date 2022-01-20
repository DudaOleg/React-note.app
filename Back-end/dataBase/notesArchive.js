const { Schema, model } = require('mongoose');

const noteArchiveSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        trim: true
    },
    dates: {
        type: Schema.Types.Array,
        ref: 'notesArchive'
    }
}, {
    timestamps: true
});

module.exports = model('notesArchive', noteArchiveSchema);
