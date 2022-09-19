let newBook = [];
if (localStorage.getItem('mainArr') !== null) {
  newBook = JSON.parse(localStorage.getItem('mainArr'));
} else {
  newBook = [];
}
function addInfo() {
  const bookObj = {};
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  bookObj.title = title;
  bookObj.author = author;
  newBook.push(bookObj);
  const newBookArrJ = JSON.stringify(newBook);
  localStorage.setItem('mainArr', newBookArrJ);
}
document.getElementById('add-book').addEventListener('click', addInfo);
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
  }
}
window.onload = bookHTML();