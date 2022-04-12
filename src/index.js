import store from '../modules/localStorage.js';
import displayLeadBoard, { initialBooks } from '../modules/dom.js';

import './style.css';

const bookListElement = document.querySelector('ul.book-list');

const bookStore = store(initialBooks);
const books = bookStore.all();
books.forEach((book) => {
  displayLeadBoard(book, bookListElement);
});