const bookData = require('../data/bookData');

async function getAllBooks() {
  return await bookData.getAllBooks();
}

async function getBookById(id) {
  const book = await bookData.getBookById(id);
  if (!book) {
    throw new Error('Book not found');
  }
  
  return book;
}

module.exports = {
  getAllBooks,
  getBookById
};