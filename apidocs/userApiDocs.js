// User authentication routes docs 
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User authentication and profile
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *               - role
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 */

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     summary: Get profile of logged-in user
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: User profile data
 */

/**
 * @swagger
 * /api/users/logout:
 *   post:
 *     summary: Logout the user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User logged out successfully
 */



