const express = require('express');
require('dotenv').config();
const facultyRoutes = require('./routes/facultyRoutes');
const errorHandler = require('./middlewares/errorHandler');
const connectionPool = require('./db/connection'); // Import the connection pool
const authenticateUser = require('./controllers/authentication')
const addUser = require('./controllers/users')
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// Enable CORS for all origins
app.use(cors());

// Use the connection pool in your routes
app.use((req, res, next) => {
  req.connectionPool = connectionPool;
  next();
});

// Routes
app.use('/api/faculty', facultyRoutes);

// Error Handler Middleware
app.use(errorHandler);

// Login endpoint with authenticate middleware
app.post('/login', authenticateUser, (req, res) => {
  // If execution reaches here, user is authenticated
  const { username, role } = req.user;
  res.json({ success: true, user: { username, role } });
});


// Add a new user endpoint
app.post('/add-user', addUser);




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(process.env.PORT)
});

