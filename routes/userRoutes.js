const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operations related to user management
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - Users
 *     security:  [] 
 *     description: Logs in a user and returns a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials.
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: User registration
 *     tags:
 *       - Users
 *     description: Registers a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Email already registered.
 *       401:
 *         description: Unauthorized.
 */


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     description: Retrieve a list of all users (authenticated).
 *     responses:
 *       200:
 *         description: List of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *       401:
 *         description: Unauthorized.
 */


/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags:
 *       - Users
 *     description: Retrieve details of a specific user by ID (authenticated).
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user to retrieve.
 *     responses:
 *       200:
 *         description: User details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: User not found.
 *       401:
 *         description: Unauthorized.
 */


/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user
 *     tags:
 *       - Users
 *     description: Delete a user by their ID (authenticated).
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to delete.
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       404:
 *         description: User not found.
 *       401:
 *         description: Unauthorized.
 */

router.post('/login', userController.login);
router.post('/register', auth, userController.register);
router.get('/', auth, userController.getAllUsers);
router.get('/:id', auth, userController.getUserById);
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;
