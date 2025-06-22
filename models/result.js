import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    exam: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Exam' 
    },
    student: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    totalMarks: Number,
    scoredMarks: Number,
    completedAt: Date,
    answers: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Answer' 
        }
    ],
});

const resultModel = mongoose.model("Result", resultSchema);

export {resultModel};