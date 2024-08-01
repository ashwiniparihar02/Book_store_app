

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'

import bookRoute from './route/bookroute.js';
import userroute from './route/userroute.js'


const app = express();
app.use(cors());

// Load environment variables from .env file
dotenv.config();

// Get port and MongoDB URI from environment variables
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

// Use routes
app.use("/book", bookRoute);
app.use("/users",userroute)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
