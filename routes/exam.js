import {Router} from "express";
import { assignExam, createExam, createQuestion, deleteExam, getAllExams, getAssignedExams, getExam, getQuestions, updateExamDetails} from "../controllers/exam.js";
import { isAuthenticated, isExaminer, isStudent } from "../middlewares/auth.js";

const router = Router();

// create new exam 
router.post("/", isAuthenticated, isExaminer, createExam);

// get all exams (admin)
router.get("/", isAuthenticated, isExaminer, getAllExams);

// get assigned exams (student)
router.get("/assigned", isAuthenticated, isStudent, getAssignedExams);

// get specific exam 
router.get("/:id", isAuthenticated, isExaminer, getExam);

// update exam details (admin)
router.put("/:id", isAuthenticated, isExaminer, updateExamDetails);

// assign exam to students 
router.post("/:id/assign", isAuthenticated, isExaminer, assignExam);

// delete exam -> delete corresponding questions from questions collection 
router.delete("/:id", isAuthenticated, isExaminer, deleteExam);

// get all questions for an exam 
router.get("/:examId/questions", isAuthenticated, isExaminer, getQuestions);

// add a new question 
router.post("/:examId/questions", isAuthenticated, isExaminer, createQuestion);


export {router};