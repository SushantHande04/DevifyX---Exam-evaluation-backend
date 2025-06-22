import { examModel } from "../models/exam.js";
import { questionModel } from "../models/question.js";

export const createExam = async (req, res) => {
    try{
        const {
            title,
            description,
        } = req.body;

        const newExam = await examModel.create({
            title,
            description,
            createdBy: req.user
        });

        req.json({status: true, message: "Exam cretaed successfully"});
    } catch(err) {
        console.log("exam creation : ", err);
        req.json({status: false, message: "Exam creation failed"});
    }
}

export const getAllExams = async (req, res) => {
    try{
        const allExams = await examModel.find({}); 

        res.json({status: true, exams: allExams});
    }catch (err) {
        console.log(err);
        res.json({status: false, message: "Failed to get all exams"});
    }
}

export const getAssignedExams = async (req, res) => {
    try{
        const exams = await examModel.find({ assignedTo: studentId });

        res.json({status: true, exams});
    }catch (err) {
        console.log(err);
        res.json({status: false, message: "Failed to get all exams"});
    }
}

export const getExam = async(req, res) => {
    try{
        const examId = req.params.id;
        const exam = await examModel.find({_id: examId}).populate("questions").populate("assignedTo"); 

        res.json({status: true, exam});
    }catch (err) {
        console.log(err);
        res.json({status: false, message: "Failed to get specified exam"});
    }
}

export const updateExamDetails = async (req, res) => {
    try{
        const examId = req.params.id;
        const {
            title,
            description,
        } = req.body;

        const newExam = await examModel.findByIdAndUpdate(examId, {
            title,
            description
        });

        req.json({status: true, message: "Exam details updated successfully"});
    } catch(err) {
        console.log("exam updation : ", err);
        req.json({status: false, message: "Failed to update exam details"});
    }
}

export const assignExam = async (req, res) => {
    try{
        const {assignTo} = req.body; // assuming an array of usernames
        const examId = req.params.id;

        const students = await userModel.find({
            username: { $in: usernames }
        });

        if (students.length === 0) {
            return res.status(404).json({ status: false, message: "No valid students found." });
        }

        const studentIds = students.map((student) => student._id);

        const updatedExam = await examModel.findByIdAndUpdate(
            examId,
            { 
                $addToSet: 
                { 
                    assignedTo: { $each: studentIds } 
                } 
            }, // $addToSet avoids duplicates
            { new: true }
        );
        

        req.json({status: true, message: "Exam assigned to selected students"});
    } catch(err) {
        console.log("exam updation : ", err);
        req.json({status: false, message: "Failed assign exam"});
    }
}

export const deleteExam = async (req, res) => {
    try{
        const examId = req.params.id;
        const deletedExam = await examModel.deleteOne({_id: examId});

        res.json({status: true, message: `Exam "${deletedExam.title}" deleted successfully`});
    }catch(err) {
        console.log("exam deletion : ", err);
        req.json({status: false, message: "Failed to delete exam"});
    }
}

export const getQuestions = async (req, res) => {
    try{
        const questions = await questionModel.find({exam: examId}); 

        res.json({status: true, questions});
    }catch (err) {
        console.log(err);
        res.json({status: false, message: "Failed to get questions"});
    }
}

export const createQuestion = async (req, res) => {
    try{
        const {
            questionType,
            content,
            options,
            correctAnswer
        } = req.body;

        // assuming options = [] if question is not MCQ 
        const newQuestion = await questionModel.create({
            questionType,
            content,
            options,
            correctAnswer
        });

        req.json({status: true, message: "Question cretaed successfully"});
    } catch(err) {
        console.log("question creation : ", err);
        req.json({status: false, message: "Failed to add new question"});
    }
}