const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    Note_text: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const note = mongoose.model('note', noteSchema)

module.exports = note