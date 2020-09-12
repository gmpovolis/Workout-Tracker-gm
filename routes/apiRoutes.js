const router = require("express").Router();
const Routine = require("../models/routine.js");

router.put("/api/workouts", ({ body }, res) => {
    Routine.create(body)
})