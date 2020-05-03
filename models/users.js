// Getting the essentials.
let express = require('express');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Creating user schema.
let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        match: /@/
    },
    age: {
        type: Number,
        required: true,
        min: 16,
        max: 70
    },
    pin: Number
},{timestamps:true});

// Creating user model.
let User = mongoose.model("User", userSchema);
module.exports = User;