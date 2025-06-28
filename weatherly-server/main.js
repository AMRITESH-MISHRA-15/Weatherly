const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Weatherly API');
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    console.log("✅ Database connection established...");
    app.listen(PORT, () => {
      console.log(`🚀 Server is listening successfully on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:");
    console.error("Error Name:", err.name);
    console.error("Error Message:", err.message);
    console.error("Full Error:", err);
    process.exit(1); // Exit app if DB connection fails
  });
