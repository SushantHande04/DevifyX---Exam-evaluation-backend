/**
 * @swagger
 * tags:
 *   name: Answers
 *   description: Submit, view, and evaluate exam answers
 */

/**
 * @swagger
 * /api/answers/{examId}/submit:
 *   post:
 *     summary: Submit all answers for an exam (includes MCQ autograding)
 *     tags: [Answers]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         description: ID of the exam
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Array of answers submitted by the student
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                     answer:
 *                       type: string
 *     responses:
 *       201:
 *         description: Answers submitted and MCQs auto-graded
 */

/**
 * @swagger
 * /api/answers/{examId}/submit:
 *   put:
 *     summary: Update submitted answers before grading
 *     tags: [Answers]
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
 *       description: Updated answers
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                     answer:
 *                       type: string
 *     responses:
 *       200:
 *         description: Answers updated successfully
 */

/**
 * @swagger
 * /api/answers/{examId}:
 *   get:
 *     summary: Get all submitted answers for the logged-in student
 *     tags: [Answers]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - name: examId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved answers successfully
 */

/**
 * @swagger
 * /api/answers/{examId}/student/{studentId}:
 *   get:
 *     summary: Get all submitted answers by a specific student (examiner only)
 *     tags: [Answers]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved student's submitted answers
 */

/**
 * @swagger
 * /api/answers/{answerId}/grade:
 *   put:
 *     summary: Grade a subjective answer manually
 *     tags: [Answers]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - name: answerId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Manual grade and feedback
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               score:
 *                 type: number
 *               feedback:
 *                 type: string
 *     responses:
 *       200:
 *         description: Answer graded successfully
 */
