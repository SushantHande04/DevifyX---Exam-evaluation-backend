/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Manage individual exam questions
 */

/**
 * @swagger
 * /api/questions/{id}:
 *   get:
 *     summary: Get a specific question by ID
 *     tags: [Questions]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the question to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Question details
 *       404:
 *         description: Question not found
 */

/**
 * @swagger
 * /api/questions/{id}:
 *   put:
 *     summary: Update a specific question
 *     tags: [Questions]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the question to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               questionType:
 *                 type: string
 *                 enum: [MCQ, short, long]
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *               correctAnswer:
 *                 type: string
 *               marks:
 *                 type: number
 *     responses:
 *       200:
 *         description: Question updated successfully
 *       404:
 *         description: Question not found
 */

/**
 * @swagger
 * /api/questions/{id}:
 *   delete:
 *     summary: Delete a specific question
 *     tags: [Questions]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the question to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Question deleted successfully
 *       404:
 *         description: Question not found
 */
