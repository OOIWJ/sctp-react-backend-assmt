const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./database');

// make sure this comes AFTER dotenv config
const booksRouter = require('./routes/books');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/books', booksRouter);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);

app.get('/books', (req, res) => {

});

// Basic route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Start the server
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});