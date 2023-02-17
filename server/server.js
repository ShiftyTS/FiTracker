require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const cors = require('cors');


// Express app
const app = express()

// Middleware
app.use(express.json())
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', routes)
app.use('/api/user', userRoutes)

// Connects to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Connected to database on port', process.env.PORT)
    })
    })
    .catch((error) => {
        console.log(error)
    })


