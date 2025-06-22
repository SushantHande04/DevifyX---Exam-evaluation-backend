import {Router} from "express";
import { isAuthenticated, isExaminer} from "../middlewares/auth.js";
import { deleteQuestion, getQuestion, updateQuestion } from "../controllers/question.js";


const router = Router();

// get specific question 
router.get("/:id", isAuthenticated, isExaminer, getQuestion);

// update question 
router.put("/:id", isAuthenticated, isExaminer, updateQuestion);

// delete question 
router.delete("/:id", isAuthenticated, isExaminer, deleteQuestion);

export {router};