const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
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
        ref: 'notes'
    }
}, {
    timestamps: true
});

module.exports = model('notes', noteSchema);
