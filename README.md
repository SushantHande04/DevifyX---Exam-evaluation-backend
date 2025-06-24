# 📝 Exam Evaluation Backend

A Node.js and Express-based backend application for managing online exams, student submissions, automatic grading of MCQs, and real-time result notifications via email.

---

## 🚀 Features

- ✅ User authentication using JWT  
- 🧑‍🏫 Examiner-driven exam creation and assignment  
- ❓ Add, update, and delete questions (MCQ, short, long)  
- 🧑‍🎓 Students can submit answers for assigned exams  
- ⚙️ Automatic grading of MCQ questions during submission  
- 📊 Result generation with total scoring logic  
- 📩 **Bonus feature :** Real-time email notification to students when results are generated (using Nodemailer)  
- 📘 **Interactive API Documentation** available at:  
  `http://localhost:<your port>/api-docs`


---
## 🧪 Technologies Used
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Nodemailer
- Swagger UI
---

## 🛠️ Project Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/SushantHande04/DevifyX---Exam-evaluation-backend.git
   cd exam-evaluation-backend

2. **Install dependencies**

   ```bash
   npm install 

3. **Start the server**
   ```bash
   npm start 

4. **Configure environment variables**
   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/exam-db
   JWT_SECRET=your_jwt_secret_key
   //Email Notification (Gmail SMTP via Nodemailer)
   GMAIL_ID=yourgmail@gmail.com
   GMAIL_APP_PASSWORD=your_app_password
**For email notifications to work, enable 2-Step Verification in your Google account and generate an App Password from Google App Passwords.**

## 📘 API Documentation
**After starting the server, navigate to:**
    `http://localhost:3000/api-docs`
