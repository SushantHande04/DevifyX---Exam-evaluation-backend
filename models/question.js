import mongoose from "mongoose";
import { examModel } from "./exam.js";

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
    correctAnswer: {
        type: mongoose.Schema.Types.Mixed, // ans can be number, array or a string
        required: true
    },
    marks: Number
});

questionSchema.post("deleteOne", {document: true, query: false }, async function (doc, next) {
  try {
    await examModel.update(
        {_id: doc.exam}, 
        {$pull: {questions: doc._id}
    });
    console.log(`Deleted one question for exam ${doc.exam}`);
    next();
  } catch (err) {
    next(err);
  }
})

const questionModel = mongoose.model("Question", questionSchema);

export {questionModel};