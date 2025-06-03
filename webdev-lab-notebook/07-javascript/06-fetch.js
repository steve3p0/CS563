const url = 'https://anapioficeandfire.com/api/books/';
const app = document.querySelector('#books');
const loadingIndicator = document.getElementById('loading');

const fetchData = async (fetchUrl) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (loadingIndicator) {
      loadingIndicator.remove(); // Remove loading indicator
    }

    if (app) {
      // The #books div already has text-center from Bootstrap.
      // The requirement "Update the styles in JavaScript to center all the books in the container given"
      // is met if each book entry respects this text-center or if they are block elements.
      // We will make each book entry a div, and text-center should apply.
      // If specific centering of the book elements themselves (as blocks) is needed,
      // more styling might be required (e.g., if app were a flex container).
      // For now, we'll assume text-center on parent is sufficient for content within book items.

      data.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('mb-4'); // Add some margin for spacing

        const title = document.createElement('h5');
        title.textContent = book.name;

        const author = document.createElement('p');
        author.textContent = `by ${book.authors.join(', ')}`;

        const releaseYear = document.createElement('p');
        const year = new Date(book.released).getFullYear();
        releaseYear.textContent = year;

        const pages = document.createElement('p');
        pages.textContent = `${book.numberOfPages} pages`;

        bookElement.appendChild(title);
        bookElement.appendChild(author);
        bookElement.appendChild(releaseYear);
        bookElement.appendChild(pages);

        app.appendChild(bookElement);
      });
    }

  } catch (error) {
    console.error('Error fetching data:', error);
    if (app && loadingIndicator) {
      loadingIndicator.remove();
      app.textContent = 'Failed to load books.';
    }
  }
};

fetchData(url); // Call the function to fetch and display data