import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
        required: true
    },
    questionType: {
        type: String,
        enum: ["MCQ", "short", "long"],
        required: true
    },
    content: {
        type: String,
        required: true
    },
    options: [String], 
    correctAns: {
        type: mongoose.Schema.Types.Mixed, // ans can be number, array or a string
        required: true
    },
    marks: Number
});

const questionModel = mongoose.model("Question", questionSchema);

export {questionModel};