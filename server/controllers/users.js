const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// Creates the JSON web token
const createJWT = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: "7d" })
}

// Logs in the user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    // Tries to create a JSON web token given the user information, catches error 
    try {
        const user = await User.login(email, password)

        const token = createJWT(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Registers the user
const registerUser = async (req, res) => {
    const {email, password} = req.body

    // Tries to create a JSON web token given the user information, catches error 
    try {
        const user = await User.register(email, password)

        const token = createJWT(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Exports functions
module.exports = {
    loginUser,
    registerUser
}