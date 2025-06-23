/**
 * @swagger
 * tags:
 *   name: Results
 *   description: Result generation and retrieval
 */

/**
 * @swagger
 * /api/results/{examId}/{studentId}:
 *   post:
 *     summary: Generate result for a student in a specific exam (examiner only)
 *     tags: [Results]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the exam
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the student
 *     responses:
 *       201:
 *         description: Result created successfully
 */

/**
 * @swagger
 * /api/results/my/{examId}:
 *   post:
 *     summary: Get result for logged-in student for a specific exam
 *     tags: [Results]
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
 *         description: Student's result fetched successfully
 */

/**
 * @swagger
 * /api/results/{examId}/student/{studentId}:
 *   post:
 *     summary: Get result for a student (examiner view)
 *     tags: [Results]
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
 *         description: Student's result fetched for examiner
 */
