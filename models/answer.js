import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    exam: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Exam',
        required: true
    },
    question: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Question',
        required: true
    },
    student: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    answer: {
        type: mongoose.Schema.Types.Mixed, // text or choice index/array
        required: true
    }, 
    isAutoGraded: Boolean,
    score: Number,
    feedback: String, // this is for manual scoring
});

const answerModel = mongoose.model("Answer", answerSchema);

export {answerModel};