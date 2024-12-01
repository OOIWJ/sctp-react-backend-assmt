const express = require('express');
const router = express.Router();
const bookService = require('../services/bookService');

// GET all products
router.get('/', async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single product
router.get('/:id', async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;