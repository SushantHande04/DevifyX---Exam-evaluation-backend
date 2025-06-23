import { answerModel } from "../models/answer.js";
import { resultModel } from "../models/result.js";
import {userModel} from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

export const generateResult = async (req, res) => {
    try{
        const {examId, studentId} = req.params;
        const {exam} = req.body;
        let scoredMarks = 0, totalMarks = 0;
        const answers = await answerModel.find({exam: examId, student: studentId}).populate("question");
        const student = await userModel.findOne({_id: studentId});
        
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

        await sendResultEmail(
            student.email,
            student.username,
            exam.title,
            `https://frontend/results/${exam._id}`
        );

        res.json({status: true, message: "Result generated successfully"});
    }catch(err) {
        console.log("result generation : ", err);
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

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SENDER,      // Your Gmail
    pass: process.env.EMAIL_SENDER_PASS, // App password (not your real password)
  },
});

const sendResultEmail = async (toEmail, studentName, examTitle, resultLink) => {
  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: toEmail,
    subject: `Result for ${examTitle}`,
    html: `
      <p>Hi <strong>${studentName}</strong>,</p>
      <p>Your result for the exam <strong>${examTitle}</strong> is now available.</p>
      <p><a href="${resultLink}">Click here to view your result</a></p>
      <p>Regards,<br/>Exam Portal Team</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (err) {
    console.error('Failed to send email:', err);
  }
};