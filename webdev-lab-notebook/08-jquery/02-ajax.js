$(document).ready(function() {
  const url = 'https://anapioficeandfire.com/api/books/';
  const $booksContainer = $('#books'); // jQuery object for the #books container
  const $loadingIndicator = $('#loading'); // jQuery object for the loading image

  // Style the main container if needed (original code had this for vanilla app element)
  // $booksContainer.css('padding-left', 0); // Example if direct styling needed via jQuery

  const addBookToDOM = (item) => {
    // Create elements using jQuery
    const $element = $('<div>').css({ // Chain CSS styling
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'margin-top': '20px'
    });

    const $title = $('<h4>').text(item.name);
    const $author = $('<p>').text(`by ${item.authors.join(', ')}`); // Handle multiple authors

    // Extract year from the 'released' date string
    const releaseYear = item.released ? new Date(item.released).getFullYear() : 'N/A';
    const $published = $('<p>').text(releaseYear);

    const $pages = $('<p>').text(`${item.numberOfPages} pages`);

    // Append created elements to the book element, then to the main container
    $element.append($title, $author, $published, $pages);
    $booksContainer.append($element);
  };

  // Fetch data using jQuery's $.ajax method
  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      // Process the data (array of books)
      $.each(data, function(index, item) {
        addBookToDOM(item);
      });
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error('Error fetching data:', textStatus, errorThrown);
      const $errorLi = $('<div>').text('An error occurred. Please try again.'); // Use div for consistency
      $booksContainer.append($errorLi);
    },
    complete: function() {
      // This function is called after success or error
      $loadingIndicator.remove(); // Remove loading indicator using jQuery
    }
  });
});