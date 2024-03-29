const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Database Connection
const connectDB = require("./config/db");
connectDB();

// Routes
const userRoutes = require("./routes/userRoutes");


const base = "/api/";

const commentRoute = require("./routes/commentRoutes")
const doctorRoutes = require("./routes/doctorRoutes");


app.use("/api/doctors", doctorRoutes);
app.use("/api",userRoutes)
app.use("/api", commentRoute)



//user
app.use("/api/auth", require("./routes/authRoutes"));

// Error Middleware
const { notFound, errorHandler } = require("./Middlewares/errorMiddleware");
app.use(notFound);
app.use(errorHandler);
// Start the Server
const server = app.listen(port, () =>
  console.log(`Server running on port ${port} 🔥`)
);
