const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(express.json());

// ------------------ Swagger Setup ------------------
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MedDrop API",
      version: "1.0.0",
      description: "API for medicine donation app",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./server.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// ------------------ In-Memory Data ------------------
let users = [];       // Registered users
let donations = [];   // Medicine donations
let notifications = []; // Notifications for matches

// ------------------ Routes ------------------

// Root
/**
 * @swagger
 * /:
 *   get:
 *     summary: Home
 *     responses:
 *       200:
 *         description: API is running
 */
app.get("/", (req, res) => res.send("Backend API is running 🚀"));

// ------------------ User Authentication ------------------
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
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
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Email already exists
 */
app.post("/users/register", (req, res) => {
  const { email, password } = req.body;
  if (users.find(u => u.email === email)) return res.status(400).json({ error: "Email already exists" });
  const user = { id: users.length + 1, email, password };
  users.push(user);
  res.status(201).json({ message: "User registered successfully", userId: user.id });
});

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login a user
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
 *         description: Login successful
 *       401:
 *         description: Invalid email or password
 */
app.post("/users/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: "Invalid email or password" });
  res.json({ message: "Login successful", token: "fake-jwt-token" });
});

// ------------------ Medicine Donations ------------------
/**
 * @swagger
 * /donations:
 *   get:
 *     summary: Get all donations
 *     responses:
 *       200:
 *         description: List of donations
 */
app.get("/donations", (req, res) => res.json(donations));

/**
 * @swagger
 * /donations:
 *   post:
 *     summary: Create a new medicine donation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               medicineName:
 *                 type: string
 *               quantity:
 *                 type: number
 *               donor:
 *                 type: string
 *     responses:
 *       201:
 *         description: Donation added
 */
app.post("/donations", (req, res) => {
  const donation = { id: donations.length + 1, ...req.body };
  donations.push(donation);

  // Check for matches
  const matchedUsers = users.filter(u => u.requestedMedicine === donation.medicineName);
  matchedUsers.forEach(u => notifications.push({ userId: u.id, message: `Donation available: ${donation.medicineName}` }));

  res.status(201).json({ message: "Donation added", data: donation });
});

// ------------------ Search & Request Medicines ------------------
/**
 * @swagger
 * /search:
 *   get:
 *     summary: Search donations by medicine name
 *     parameters:
 *       - in: query
 *         name: medicineName
 *         schema:
 *           type: string
 *         required: true
 *         description: Medicine name to search for
 *     responses:
 *       200:
 *         description: Search results
 */
app.get("/search", (req, res) => {
  const { medicineName } = req.query;
  const results = donations.filter(d => d.medicineName.toLowerCase().includes(medicineName.toLowerCase()));
  res.json(results);
});

/**
 * @swagger
 * /request:
 *   post:
 *     summary: Request a medicine
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: number
 *               medicineName:
 *                 type: string
 *     responses:
 *       200:
 *         description: Request submitted
 *       404:
 *         description: User not found
 */
app.post("/request", (req, res) => {
  const { userId, medicineName } = req.body;
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ error: "User not found" });
  user.requestedMedicine = medicineName;

  const matchedDonations = donations.filter(d => d.medicineName.toLowerCase() === medicineName.toLowerCase());
  if (matchedDonations.length) {
    notifications.push({ userId, message: `Donation available for ${medicineName}` });
  }

  res.json({ message: "Medicine request submitted" });
});

// ------------------ Notifications ------------------
/**
 * @swagger
 * /notifications/{userId}:
 *   get:
 *     summary: Get notifications for a user
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: User notifications
 */
app.get("/notifications/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const userNotifications = notifications.filter(n => n.userId === userId);
  res.json(userNotifications);
});

// ------------------ Start Server ------------------
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
