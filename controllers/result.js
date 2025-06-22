import { answerModel } from "../models/answer.js";
import { resultModel } from "../models/result.js";

export const generateResult = async (req, res) => {
    try{
        const {examId, studentId} = req.params;
        let scoredMarks = 0, totalMarks = 0;
        const answers = await answerModel.find({exam: examId, student: studentId}).populate("question");
        
        for(let i = 0 ; i < answers.length; i++) {
            scoredMarks += answers[i].score;
            totalMarks += answers[i].question.marks;
        }

        const result = await resultModel.create({
            exam: examId,
            student: studentId,
            totalMarks,
            scoredMarks,
            answers: answers.map(ans => ans._id)
        })

        res.json({status: true, message: "Result generated successfully"});
    }catch(err) {
        res.json({status: false, message: "Failed to generate result"})
    }   
}

export const getResultForStudent = async (req, res) => {
    try{
        const {examId} = req.params;
        
        const result = await resultModel.findOne({exam: examId, student: req.user._id});

        res.json({status: true, result});
    }catch(err) {
        res.json({status: false, message: "Failed to fetch result"});
    }
}

export const getResultForExaminer = async (req, res) => {
    try{
        const {examId, studentId} = req.params;
        
        const result = await resultModel.findOne({exam: examId, student: studentId});

        res.json({status: true, result});
    }catch(err) {
        res.json({status: false, message: "Failed to fetch result"});
    }
}