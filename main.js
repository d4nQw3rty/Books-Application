let newBook = new Array(0);
const title = document.getElementById('book-title');
const author = document.getElementById('book-author');

class Book {
  constructor() {
    if (localStorage.getItem('mainArr') !== null) {
      this.newBook = JSON.parse(localStorage.getItem('mainArr'));
    } else {
      this.newBook = new Array(0);
    }
  }

  addInfo(title, author) {
    this.newBook.push({
      title: title.value,
      author: author.value,
    });
    localStorage.setItem('mainArr', JSON.stringify(this.newBook));
  }

  removeBook(j) {
    this.parentElement.remove();
    this.newBook.splice(j, 1);
    localStorage.setItem('mainArr', JSON.stringify(newBook));
    window.location.reload();
  }
}

const booksObject = new Book();
const bookList = document.getElementById('book-list');
function bookHTML() {
  if (JSON.parse(localStorage.getItem('mainArr')) != null) {
    newBook = JSON.parse(localStorage.getItem('mainArr'));
  }
  newBook.forEach((obj) => {
    const div = document.createElement('div');
    bookList.appendChild(div);
    const p = document.createElement('p');
    p.innerHTML = obj.title;
    div.appendChild(p);
    const p1 = document.createElement('p');
    p1.innerHTML = obj.author;
    div.appendChild(p1);
    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.classList.add('remove-book');
    div.appendChild(button);
  });
}

function addBook() {
  booksObject.addInfo(title, author);
  bookHTML();
}

function formCheck() {
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  if (title === '' || author === '') {
    const message = document.createElement('p');
    message.innerHTML = 'Please fill all the fields';
    const form = document.getElementById('book-form');
    form.appendChild(message);
    setTimeout(() => { message.remove(); }, 2000);
  } else {
    addBook();
  }
}
document.getElementById('add-book').addEventListener('click', formCheck);
window.onload = bookHTML();