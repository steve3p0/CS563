## Reflection Document

### HTML

For Lab 07, HTML was primarily relevant for Exercises 04 (DOM) and 06 (Fetch).
* **Exercise 04 (DOM)**: The `04-dom.html` file provided the structure with input fields, buttons, and output areas. A small modification was made to add a missing output `div` for consistency in the second part of the exercise, which facilitated easier DOM selection in the JavaScript. The HTML elements had clear IDs for targeting.
* **Exercise 06 (Fetch)**: `06-fetch.html` provided a container (`#books`) and a loading image. The JavaScript was responsible for dynamically creating and appending new HTML elements (divs, headings, paragraphs) into this container to display the fetched book data.

The lab showed how JavaScript interacts with a predefined HTML structure and also how it can dynamically generate HTML content.

### Accessibility

Wave AIM: There was one alert reported for skipped heading level. I did not fix this as a fix would likely contradict the instructors screenshot that we are supposed to match.

Accessibility considerations in this lab were most pertinent to the DOM manipulation and Fetch exercises:
* **Exercise 04 (DOM)**: Ensuring that labels were correctly associated with inputs (which they were in the starter HTML using `for` attributes) is good for accessibility. Dynamically updated output areas should be announced by screen readers if the content change is significant; ARIA live regions could be used for more advanced scenarios, though not explicitly required here.
* **Exercise 06 (Fetch)**: When dynamically generating content (the list of books), using semantic HTML (e.g., `<h5>` for titles, `<p>` for details) is important. The loading state (`javascript-ex06-fetch-01.png`) used an `<img>` with an `alt` attribute. Ensuring the dynamically added book information is presented in a logical order and is screen-reader friendly is key. The visual centering achieved via JavaScript/CSS should also ensure text remains readable and doesn't overlap.

For other exercises (01, 02, 03, 05, 07) that were purely JavaScript logic without direct DOM output defined in this lab, accessibility primarily relates to ensuring any console output or returned data structures would be interpretable if used in a broader, accessible application.

### CSS

CSS was minimally a focus in this lab, with `04-dom.css` providing basic styling for the DOM exercise.

### JavaScript

This lab was a comprehensive dive into various fundamental and advanced JavaScript concepts, essential for web development:

* **Exercise 01 (Variables, Data Types, Operators):** This exercise reinforced basic JavaScript syntax, including variable declaration (`let`, `const`), understanding different data types (strings, numbers, booleans, arrays, objects), and using various operators (arithmetic, assignment, comparison, logical). It served as a strong refresher on the building blocks of JavaScript.
* **Exercise 02 (Conditionals and Loops):** This covered control flow structures. I practiced using `if`/`else if`/`else` statements for conditional logic and different types of loops (`for`, `while`, `do-while`, `for...of`, `for...in`) to iterate over data structures like arrays and objects. This is critical for creating dynamic and responsive program logic.
* **Exercise 03 (Functions and Scope):** This exercise focused on defining and calling functions, understanding function parameters and return values, and grasping the concept of scope (global, local, block). It highlighted how functions promote code reusability and organization.
* **Exercise 04 (DOM Manipulation):** This was a pivotal exercise in understanding how JavaScript interacts with HTML. I learned to select HTML elements using `document.getElementById()`, `document.querySelector()`, and `document.querySelectorAll()`, modify their content (`textContent`, `innerHTML`), change attributes, and handle events (e.g., button clicks). This is fundamental for creating interactive web pages.
* **Exercise 05 (Arrays and Objects):** This exercise provided deeper practice with JavaScript's primary data structures. I used array methods (e.g., `push`, `pop`, `splice`, `map`, `filter`, `reduce`) and object manipulation techniques (e.g., adding/deleting properties, iterating over keys/values). This is essential for managing and processing data in web applications.
* **Exercise 06 (Fetch API):** This was an introduction to asynchronous JavaScript and interacting with external APIs. I used the `fetch()` API to retrieve data (e.g., a list of books) from a remote server. Understanding `Promise`s, `async`/`await`, and how to handle successful responses (`.then()`) and errors (`.catch()`) was a key learning. This is crucial for building dynamic web applications that consume external data.
* **Exercise 07 (ES6+ Features):** This exercise introduced modern JavaScript features that improve code readability and efficiency. I practiced using arrow functions for concise syntax, destructuring assignment for easier data extraction from arrays and objects, the spread operator for array/object manipulation, and template literals for easier string interpolation.

Overall, Lab 7 provided a comprehensive overview of essential JavaScript features, from basic syntax and control flow to DOM manipulation, asynchronous operations, and modern language enhancements, equipping me with the skills to build interactive and data-driven web applications.