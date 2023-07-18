// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// Import routes
const commentRoute = require('./routes/comments');

// Create web server
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Route
app.use('/comments', commentRoute);

// Error handler
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

// Start web server
app.listen(3001, () => {
    console.log('Web server is running on port 3001');
});