const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        require: true,
    },
    salary: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: false,
    },
    gender : {
        type: String,
        require: true,
        enum : ['male', 'female'],
    }
}, {
    versionKey: false
})

const userMadal = mongoose.model('user', userSchema)

module.exports = userMadal
