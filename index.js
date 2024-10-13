function fetchBooks() {
  // Fetch data from the Game of Thrones API
   fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      renderBooks(data); // Pass the JSON data to renderBooks
    })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name; // Assuming 'name' contains the book title
    main.appendChild(h2); // Add the book title to the main section
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); // Call fetchBooks when the page loads
});
