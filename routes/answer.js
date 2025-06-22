import {Router} from "express";
import { isAuthenticated, isStudent, isExaminer } from "../middlewares/auth.js";
import { getAnswers, getStudentAnswers, gradeAnswer, submitAllAnswers, updateAnswer } from "../controllers/answers.js";


const router = Router();

// submit all answers + autograding MCQ answers 
router.post("/:examId/submit", isAuthenticated, isStudent, submitAllAnswers);

// (update answer)
router.put("/:examId/submit", isAuthenticated, isStudent, updateAnswer);

// get submitted answers 
router.get("/:examId", isAuthenticated, getAnswers);

// manual grading : 
// get all submitted answers 
router.get("/:examId/student/:studentId", isAuthenticated, isExaminer, getStudentAnswers);

// grade subjective answer 
router.put("/:answerId/grade", isAuthenticated, isExaminer, gradeAnswer);

export {router};