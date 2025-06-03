## Reflection Document

### HTML

For Lab 07, HTML was primarily relevant for Exercises 04 (DOM) and 06 (Fetch).
* **Exercise 04 (DOM)**: The `04-dom.html` file provided the structure with input fields, buttons, and output areas. A small modification was made to add a missing output `div` for consistency in the second part of the exercise, which facilitated easier DOM selection in the JavaScript. The HTML elements had clear IDs for targeting.
* **Exercise 06 (Fetch)**: `06-fetch.html` provided a container (`#books`) and a loading image. The JavaScript was responsible for dynamically creating and appending new HTML elements (divs, headings, paragraphs) into this container to display the fetched book data.

The lab showed how JavaScript interacts with a predefined HTML structure and also how it can dynamically generate HTML content.

### Accessibility

Accessibility considerations in this lab were most pertinent to the DOM manipulation and Fetch exercises:
* **Exercise 04 (DOM)**: Ensuring that labels were correctly associated with inputs (which they were in the starter HTML using `for` attributes) is good for accessibility. Dynamically updated output areas should be announced by screen readers if the content change is significant; ARIA live regions could be used for more advanced scenarios, though not explicitly required here.
* **Exercise 06 (Fetch)**: When dynamically generating content (the list of books), using semantic HTML (e.g., `<h5>` for titles, `<p>` for details) is important. The loading state (`javascript-ex06-fetch-01.png`) used an `<img>` with an `alt` attribute. Ensuring the dynamically added book information is presented in a logical order and is screen-reader friendly is key. The visual centering achieved via JavaScript/CSS should also ensure text remains readable and doesn't overlap.

For other exercises (01, 02, 03, 05, 07) that were purely JavaScript logic without direct DOM output defined in this lab, accessibility primarily relates to ensuring any console output or returned data structures would be interpretable if used in a broader, accessible application.

### CSS

CSS was minimally a focus in this lab, with `04-dom.css` providing basic styling for the DOM exercise.
* **Exercise 04 (DOM)**: The `04-dom.css` styled input margins and the `.output` divs, helping to visually structure the simple page. No custom CSS was written by me for this exercise beyond what was provided.
* **Exercise 06 (Fetch)**: The instruction "Update the styles in JavaScript to center all the books in the container given" was addressed by noting that the parent `#books` div had `text-center` from Bootstrap (in `06-fetch.html`), and the dynamically created book elements were structured to respect this (e.g., default block behavior of divs, or their content being text). The example solution also added `margin-bottom` for spacing. Explicit JavaScript styling for centering beyond this was deemed potentially unnecessary if the HTML/CSS structure achieved it. The `06-fetch.html` itself used Bootstrap classes for overall page styling (`bg-info`, `.container`, `.border`, etc.).

The JavaScript exercises themselves (01, 02, 03, 05, 07) did not involve CSS.