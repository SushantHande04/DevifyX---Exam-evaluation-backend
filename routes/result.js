import {Router} from "express";
import { isAuthenticated, isStudent, isExaminer } from "../middlewares/auth.js";
import { generateResult, getResultForExaminer, getResultForStudent } from "../controllers/result.js";

const router = Router();

// generate result 
router.post("/:examId/:studentId", isAuthenticated, isExaminer, generateResult);

// get result (student)
router.post("/my/:examId", isAuthenticated, isStudent, getResultForStudent);

// get result (examiner)
router.post("/:examId/student/:studentId", isAuthenticated, isExaminer, getResultForExaminer);

export {router};