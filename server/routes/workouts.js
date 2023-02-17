const express = require('express')

// Reference controller functions to keep code in this file organized
const { 
    getAllWorkouts,
    getWorkout,
    postWorkout,
    deleteWorkout,
    updateWorkout
}  = require('../controllers/workoutCRUD')

// Require authentication to reach the below workout routes
const requireAuth = require('../middleware/requireAuth')

// Create the router
const router = express.Router()

router.use(requireAuth)

// Routes: When the given route is called, performs the appropriate function

// GET all the workouts
router.get('/', getAllWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a workout
router.post('/', postWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

// Exports the router
module.exports = router