import { answerModel } from "../models/answer.js";

export const submitAllAnswers = async (req, res) => {
    try{
        const allAnswers = req.body.answers; // expecting an array of answers 
        const {examId}= req.params;
        const answers = allAnswers.map((ans) => ({
            exam: examId,
            question: ans.questionId,
            student: ans.answerdBy,
            answer: ans.content, // it can be MCQ option, array of options, string 
            isAutoGraded: (ans.type == "MCQ" ? true : false),
            score: 0,
            feedback: ""
        }));
        // saving answers first to prevent loss 
        const allanswers = await answerModel.insertMany(answers); 

        // autoGrading logic 
        const evaluatedAnswers = [];
        const mcqAnswers = await answerModel.find({exam: examId, isAutograded: true}).populate("question");
    
        // filter questions which are MCQ based 
        const mcqQuestions = answers.filter((a) => (
            a.question.type == "MCQ" ? a.question : null
        ));
        
        // grade ans based on the alloted marks and correctness 
        for(i = 0 ; i < mcqAnswers.length; i++) {
            if(mcqAnswers[i].answer === mcqQuestions[i].correctAnswer) {
                mcqAnswers[i].score = mcqQuestions[i].marks
                evaluatedAnswers.push(mcqAnswers[i]);
            }
        }

        const bulkOperations = evaluatedAnswers.map((a) => ({
            updateOne: {
                filter: {_id: a._id},
                update: {score: a.score}
            }
        }));

        await answerModel.bulkWrite(bulkOperations);

        res.json({status: true, message: "Answers submitted successfully"});
    }catch (err) {
        console.log("answers submission:", err);
        res.json({status: false, message: "Failed to submit answers"});
    }
}

export const updateAnswer = async (req, res) => {
    try{
        const {answer} = req.body;  
        const {examId}= req.params;

        const allanswers = await answerModel.findByIdAndUpdate(answer._id, {
            answer: answer.content
        }); 

        res.json({status: true, message: "Answer updated successfully"});
    }catch (err) {
        console.log("answers updation:", err);
        res.json({status: false, message: "Failed to update answer"});
    }
}

export const getAnswers = async (req, res) => {
    try{
        const {examId}= req.params;

        const answers = await answerModel.find({exam: examId}); 

        res.json({status: true, answers});
    }catch (err) {
        console.log("fetch answers :", err);
        res.json({status: false, message: "Failed to fetch answers"});
    }
}

export const getStudentAnswers = async (req, res) => {
    try{
        const {examId, studentId} = req.params;
        const answers = await answerModel.find({exam: examId, student: studentId});

        res.json({status: true, answers});
    }catch(err) {
        console.log("error fetching answers: ", err);
        res.json({status: true, message: "Failed to fetch answers"});
    }
}

export const gradeAnswer = async (req, res) => {
    try{
        const {score, feedback} = req.body;
        const {answerId} = req.params;
        const answer = await answerModel.findByIdAndUpdate(answerId, {
            score,
            feedback
        });

        res.json({status: true, message: "Successfully graded the answer"});
    }catch(err) {
        console.log("error grading answer: ", err);
        res.json({status: true, message: "Failed to grade answer"});
    }
}