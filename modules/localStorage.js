const store = (initialData = []) => {
  let books;

  const saveToLocalStorage = (data) => {
    const booksString = JSON.stringify(data);
    localStorage.setItem('bookStoreData', booksString);
    return true;
  };

  const rawBooksData = localStorage.getItem('bookStoreData');
  if (rawBooksData) {
    books = JSON.parse(rawBooksData);
  } else {
    books = initialData;
    saveToLocalStorage(books);
  }

  const all = () => books;

  const add = (newData) => {
    if (!newData || !newData.id) {
      return false;
    }
    books.push(newData);
    return saveToLocalStorage(books);
  };

  const refresh = (id) => {
    books = books.filter((book) => book.id !== id);
    return saveToLocalStorage(books);
  };

  return {
    all,
    add,
    refresh,
  };
};
export default store;