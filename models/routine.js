const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const routineSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter the type of excercise!"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter the excercise name"
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    distance: {
        type: Number
    },
    duration: {
        type: Number,
        required: "Enter the excercise duration"
    }
});

const Routine = mongoose.model("routine", routineSchema);

module.exports = Routine;