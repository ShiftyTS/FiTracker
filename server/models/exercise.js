const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Builds schema for exercise consisting of title, sets, reps, load, timestamps, 
// and userid (so that created workouts only display for that specific user)
const exerciseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    userid: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Exercise', exerciseSchema)