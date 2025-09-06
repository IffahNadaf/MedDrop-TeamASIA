// ------------------ Load Environment ------------------
import dotenv from "dotenv";
dotenv.config();

// ------------------ Imports ------------------
import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

// ------------------ Express App ------------------
const app = express();
app.use(express.json());

// ------------------ MongoDB Connection ------------------
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// ------------------ Mongoose Models ------------------
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  requestedMedicine: String
});
const User = mongoose.model("User", userSchema);

const donationSchema = new mongoose.Schema({
  medicineName: { type: String, required: true },
  quantity: { type: Number, required: true },
  donor: { type: String, required: true }
});
const Donation = mongoose.model("Donation", donationSchema);

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: String
});
const Notification = mongoose.model("Notification", notificationSchema);

// ------------------ Swagger Setup ------------------
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MedDrop API",
      version: "1.0.0",
      description: "API for medicine donation app",
    },
    servers: [{ url: `http://localhost:${process.env.PORT || 5000}` }],
  },
  apis: ["./server.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// ------------------ Routes ------------------

// Root
app.get("/", (req, res) => res.send("Backend API is running 🚀"));

// User Authentication
app.post("/users/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: "Email already exists" });

    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully", userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ error: "Invalid email or password" });
    res.json({ message: "Login successful", token: "fake-jwt-token" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Medicine Donations
app.get("/donations", async (req, res) => {
  const donations = await Donation.find();
  res.json(donations);
});

app.post("/donations", async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();

    // Notify users who requested this medicine
    const matchedUsers = await User.find({ requestedMedicine: donation.medicineName });
    for (const u of matchedUsers) {
      const notification = new Notification({ userId: u._id, message: `Donation available: ${donation.medicineName}` });
      await notification.save();
    }

    res.status(201).json({ message: "Donation added", data: donation });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search & Request Medicines
app.get("/search", async (req, res) => {
  const { medicineName } = req.query;
  const results = await Donation.find({ medicineName: { $regex: medicineName, $options: "i" } });
  res.json(results);
});

app.post("/request", async (req, res) => {
  try {
    const { userId, medicineName } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.requestedMedicine = medicineName;
    await user.save();

    const matchedDonations = await Donation.find({ medicineName });
    for (const d of matchedDonations) {
      const notification = new Notification({ userId: user._id, message: `Donation available for ${medicineName}` });
      await notification.save();
    }

    res.json({ message: "Medicine request submitted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Notifications
app.get("/notifications/:userId", async (req, res) => {
  const userId = req.params.userId;
  const userNotifications = await Notification.find({ userId });
  res.json(userNotifications);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
