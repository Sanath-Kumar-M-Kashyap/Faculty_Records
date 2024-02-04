const express = require('express');
const dotenv = require('dotenv');
const facultyRoutes = require('./routes/facultyRoutes');
const errorHandler = require('./middlewares/errorHandler');
const connectionPool = require('./db/connection'); // Import the connection pool

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use the connection pool in your routes
app.use((req, res, next) => {
  req.connectionPool = connectionPool;
  next();
});

// Routes
app.use('/api/faculty', facultyRoutes);

// Error Handler Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

