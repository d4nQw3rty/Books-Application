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

const showListButton = document.getElementById('show-list');
const addNewButton = document.getElementById('add-new');
const showContactButton = document.getElementById('show-contact');

const sectionList = document.getElementById('list');
const sectionForm = document.getElementById('form');
const sectionContact = document.getElementById('contact');
addNewButton.addEventListener('click', () => {
  sectionForm.style.display = 'flex';
  addNewButton.style.color = 'blue';
  showListButton.style.color = 'black';
  showContactButton.style.color = 'black';
  sectionList.style.display = 'none';
  sectionContact.style.display = 'none';
});

showListButton.addEventListener('click', () => {
  sectionList.style.display = 'flex';
  showListButton.style.color = 'blue';
  showContactButton.style.color = 'black';
  addNewButton.style.color = 'black';
  sectionForm.style.display = 'none';
  sectionContact.style.display = 'none';
});

showContactButton.addEventListener('click', () => {
  sectionContact.style.display = 'flex';
  showContactButton.style.color = 'blue';
  sectionList.style.display = 'none';
  sectionForm.style.display = 'none';
  showListButton.style.color = 'black';
  addNewButton.style.color = 'black';
});

function capitalize(string) {
  string.value = string.value.charAt(0).toUpperCase() + string.value.slice(1);
}

window.onload = capitalize();
