const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

// Builds schema for exercise consisting of email and password
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

// Static login method, called when logging in user (notice usage of function rather than arrow (=>) because using 'this')
userSchema.statics.login = async function(email, password) {

    // Checks if fields are filled in
    if (!email || !password) {
        throw Error('All fields must be filled in')
    }

    const user = await this.findOne({ email })

    // Checks if the user can be found
    if (!user) {
        throw Error("Invalid login credentials")
    }

    const passMatch = await bcrypt.compare(password, user.password) //comparing actual password and hashed password

    // Checks if the password matches the stored encrypted password
    if (!passMatch) {
        throw Error("Invalid login credentials")
    }

    return user
}

// Static register method, called when registering new user
userSchema.statics.register = async function(email, password) {

    // Checks if fields are filled in
    if (!email || !password) {
        throw Error('All fields must be filled in')
    }

    // Throws error if the email is not valid
    if (!validator.isEmail(email)) {
        throw Error('Email is invalid')
    }

    // Throws error if the password is too weak
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is too weak')
    }

    const exists = await this.findOne({ email })

    // Throws error if an account with the given email already exists
    if (exists) {
        throw Error("Account with this email already exists.")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // Creates and adds user to the database using the given email and hashed password
    const user = await this.create({ email, password: hash })

    return user
}

module.exports = mongoose.model('User', userSchema)