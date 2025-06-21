import mongoose from "mongoose";
import {questionModel} from "./question.js";

const examSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    assignedTo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question",
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

examSchema.post("deleteOne", { document: true, query: false }, async function (doc, next) {
  try {
    await questionModel.deleteMany({ exam: doc._id });
    console.log(`Deleted questions for exam ${doc._id}`);
    next();
  } catch (err) {
    next(err);
  }
});

const examModel = mongoose.model("Exam", examSchema);

export {examModel};