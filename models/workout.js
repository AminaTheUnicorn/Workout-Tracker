const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        trim: true,
    
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "String is Required"

            }, 
            name: {
                type: String,
                trim: true,
                required: "String is Required"
            },
            duration : {
                type: Number,
                unique: true,
                required: true
            },
            weight : {
                type: Number,
                unique: true,
                required: true
            },

            reps: {
                type: Number,
                unique: true,
                required: true
            },
           set : {
                type: Number,
                unique: true,
                required: true
            },
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;