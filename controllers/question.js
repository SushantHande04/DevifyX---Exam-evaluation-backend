import { questionModel } from "../models/question.js";

export const getQuestion = async (req, res) => {
    try{
        const questionId = req.params.id;

        const question = await questionModel.findOne({_id: questionId});

        res.json({status: true, question});
    }catch(err) {
        console.log("fetch specific question err:", err);
        res.json({status: false, message: "Failed to get specified question"});
    }
}

export const updateQuestion = async (req, res) => {
    try{
        const {
            questionType,
            content,
            options,
            correctAnswer
        } = req.body;
        const questionId = req.params.id;

        const updatedQuestion = await questionModel.findByIdAndUpdate({_id: questionId}, {
            questionType,
            content,
            options,
            correctAnswer
        }, {return: true});

        res.json({
            status: true, 
            message: "Question updated successfully", 
            updatedQuestion
        });
    }catch(err) {
        console.log("update specific question err:", err);
        res.json({status: false, message: "Failed update specified question"});
    }
}

export const deleteQuestion = async (req, res) => {
    try{
        const questionId = req.params.id;

        const deletedQuestion = await questionModel.deleteOne({_id: questionId});

        res.json({
            status: true, 
            message: "Question deleted successfully", 
            deletedQuestion
        });
    }catch(err) {
        console.log("delete specific question err:", err);
        res.json({status: false, message: "Failed delete specified question"});
    }
}