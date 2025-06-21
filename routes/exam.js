import {Router} from "express";
import { assignExam, createExam, deleteExam, getAllExams, getAssignedExams, getExam, updateExamDetails} from "../controllers/exam";
import { isAuthenticated, isExaminer, isStudent } from "../middlewares/auth";

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

export {router};