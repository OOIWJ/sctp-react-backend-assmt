const pool = require('../database');

async function getAllBooks() {
  const [rows] = await pool.query('SELECT id, title, author, CAST(price AS DOUBLE) AS price, stock, image FROM books');
  return rows;
}

async function getBookById(id) {
  const [rows] = await pool.query('SELECT * FROM books WHERE id = ?', [id]);
  return rows[0];
}

module.exports = {
  getAllBooks,getBookById
};