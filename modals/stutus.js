const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
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
    salary: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
        enum: ['male', 'female'],
    }, number: {
        type: Number,
        require: true,
    },
    dos: {
        type: Date,
        require: true,
    },
    remarkStatus: {
        type: String,
        enum: ['pending', 'success', 'rejected', 'cancelled'],
        required: true,
    }
    ,
    remarkMassage: {
        type: String,
        require: true,
    }
}, {
    versionKey: false
})

const stautsModal = mongoose.model('status', statusSchema)

module.exports = stautsModal