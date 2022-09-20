let newBook = [];
if (localStorage.getItem('mainArr') !== null) {
  newBook = JSON.parse(localStorage.getItem('mainArr'));
} else {
  newBook = new Array('');
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function addInfo() {
  const bookObj = new Book();
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  bookObj.title = title;
  bookObj.author = author;
  newBook.push(bookObj);
  const newBookArrJ = JSON.stringify(newBook);
  localStorage.setItem('mainArr', newBookArrJ);
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
    addInfo();
  }
}

document.getElementById('add-book').addEventListener('click', formCheck);
function bookHTML() {
  const bookList = document.getElementById('book-list');
  const dataObj = JSON.parse(localStorage.getItem('mainArr'));
  for (let i = 0; i < dataObj.length; i += 1) {
    const div = document.createElement('div');
    const cpl = i.toString();
    div.id = cpl;
    bookList.appendChild(div);
    const p = document.createElement('p');
    p.innerHTML = dataObj[i].title;
    div.appendChild(p);
    const p1 = document.createElement('p');
    p1.innerHTML = dataObj[i].author;
    div.appendChild(p1);
    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.classList.add('remove-book');
    div.appendChild(button);
    button.addEventListener('click', () => {
      div.remove();
      newBook.splice(i, 1);
      const newBookArrJ = JSON.stringify(newBook);
      localStorage.setItem('mainArr', newBookArrJ);
      window.location.reload();
    });
  }
}

window.onload = bookHTML();