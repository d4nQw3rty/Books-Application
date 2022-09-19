document.getElementById('add-book').addEventListener('click', function() {
  var newBook = [],
   title = '',
   author = ''; 
    title = document.getElementById('book-title').value;
    author = document.getElementById('book-author').value;
  console.log(` Book ${title}, author ${author} added`);
  
});
