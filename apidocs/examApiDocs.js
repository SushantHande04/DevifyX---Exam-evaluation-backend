/**
 * @swagger
 * tags:
 *   name: Exams
 *   description: Exam creation, assignment, and management
 */

/**
 * @swagger
 * /api/exams:
 *   post:
 *     summary: Create a new exam
 *     tags: [Exams]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Exam created successfully
 */

/**
 * @swagger
 * /api/exams:
 *   get:
 *     summary: Get all exams (examiner only)
 *     tags: [Exams]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of all exams
 */

/**
 * @swagger
 * /api/exams/assigned:
 *   get:
 *     summary: Get exams assigned to student
 *     tags: [Exams]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of assigned exams
 */

/**
 * @swagger
 * /api/exams/{id}:
 *   get:
 *     summary: Get details of a specific exam
 *     tags: [Exams]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Exam details
 */

/**
 * @swagger
 * /api/exams/{id}:
 *   put:
 *     summary: Update exam details
 *     tags: [Exams]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Exam updated successfully
 */

/**
 * @swagger
 * /api/exams/{id}/assign:
 *   post:
 *     summary: Assign exam to students
 *     tags: [Exams]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usernames:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Exam assigned successfully
 */

/**
 * @swagger
 * /api/exams/{id}:
 *   delete:
 *     summary: Delete exam and its questions
 *     tags: [Exams]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Exam and related questions deleted
 */

/**
 * @swagger
 * /api/exams/{examId}/questions:
 *   get:
 *     summary: Get all questions for an exam
 *     tags: [Exams]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of questions for the exam
 */

/**
 * @swagger
 * /api/exams/{examId}/questions:
 *   post:
 *     summary: Add a new question to an exam
 *     tags: [Exams]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questionType:
 *                 type: string
 *                 enum: [MCQ, short, long]
 *               content:
 *                 type: string
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *               correctAns:
 *                 type: string
 *               marks:
 *                 type: number
 *     responses:
 *       201:
 *         description: Question created successfully
 */