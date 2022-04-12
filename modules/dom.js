export const displayLeadBoard = ({ name, score, id }, parentElement) => {
  const bookListItemElement = document.createElement('li');
  bookListItemElement.className = 'book-list-item';
  bookListItemElement.innerHTML = `
          <section>
            <h3>${name}</h3>
            <p>${score}</p>
            <button id="${id}" type="button" onclick="handleRemove('${id}')" class="remove-button">Remove</button>
            </section>`;
  parentElement.appendChild(bookListItemElement);
};

const generateId = () => `id_${Math.random().toString(36).slice(2)}`;

export const initialBooks = [
  {
    name: 'basit',
    score: '100',
    id: generateId(),
  },

  {
    name: 'basit',
    score: '100',
    id: generateId(),
  },

];
