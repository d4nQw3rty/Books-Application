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

  removeBook(index) {
    this.newBook.splice(index, 1);
    localStorage.setItem('mainArr', JSON.stringify(this.newBook));
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
    const div = document.createElement('tr');
    div.classList = newBook.indexOf(obj);
    if (div.classList % 2 === 0) {
      div.classList.add('gray');
      div.classList.add('bookDiv');
    } else {
      div.classList.add('white');
      div.classList.add('bookDiv');
    }
    bookList.appendChild(div);
    const p = document.createElement('td');
    p.innerHTML = ['"', obj.title, '"', 'by', obj.author].join(' ');
    div.appendChild(p);
    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.classList.add('remove-book');
    button.setAttribute('id', obj.title);
    div.appendChild(button);
    const removeBtn = document.querySelectorAll('.remove-book');
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.id === obj.title) {
          booksObject.removeBook(newBook.indexOf(obj));
          btn.parentElement.remove();
        }
      });
    });
  });
}

function addBook() {
  booksObject.addInfo(title, author);
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

function displayDate() {
  document.getElementById('date').innerHTML = Date();
}
window.onload = displayDate();

document.getElementById('add-book').addEventListener('click', formCheck);

window.onload = bookHTML();