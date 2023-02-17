const mongoose = require('mongoose')
const Exercise = require('../models/exercise')

// GET all the workouts
const getAllWorkouts = async (req, res) => {
    const userid = req.user._id
    const workoutAll = await Exercise.find({ userid }).sort({createdAt: -1})    //gets all and sorts in descending by created at date

    res.status(200).json(workoutAll)
}

// GET a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    // Checks if the given id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Cannot find workout'})
    }

    const workoutSingle = await Exercise.findById(id)

    if (workoutSingle) {
        return res.status(200).json(workoutSingle)
    }
    return res.status(400).json({error: 'Cannot find workout'})
}

// POST a workout
const postWorkout = async (req, res) => {

    // Extracts information from body being passed in
    const {title, sets, reps, load} = req.body

    // Tries to post a workout given the information being passed in, if fails catches error
    try {
        const userid = req.user._id
        const workoutPost = await Exercise.create({title, sets, reps, load, userid})
        res.status(200).json(workoutPost)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a workout
const deleteWorkout = async (req, res) => {

    // Gets the id
    const { id } = req.params

    // Checks if the given id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Cannot find workout'})
    }

    const workoutDelete = await Exercise.findOneAndDelete({_id: id})

    // Tries to find and delete the workout based on the given id, if fails returns error
    if (workoutDelete) {
        return res.status(200).json(workoutDelete)
    }
    return res.status(400).json({error: 'Cannot find workout'})
}

// UPDATE a workout
const updateWorkout = async (req, res) => {

    // Gets the id
    const { id } = req.params

    // Checks if the given id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Cannot find workout'})
    }

    const workoutUpdate = await Exercise.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    // Tries to find and update the workout based on the given id, if fails returns error
    if (workoutUpdate) {
        return res.status(200).json(workoutUpdate)
    }
    return res.status(400).json({error: 'Cannot find workout'})
}

// Exports functions
module.exports = {
    getAllWorkouts,
    getWorkout,
    postWorkout,
    deleteWorkout,
    updateWorkout
}