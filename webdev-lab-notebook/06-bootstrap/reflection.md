## Reflection Document

### HTML

Lab 06 focused on utilizing Bootstrap's predefined classes to structure HTML content.
* **Cards (Exercise 01)**: Required understanding the `.card`, `.card-header`, `.card-body`, `.card-footer`, `.card-img-top`, etc. classes to build the component. The main challenge encountered was the conflict with the global `styles.css`, which was resolved by scoping the problematic CSS rule. Using Bootstrap's grid (`.row`, `.col-md-6`) to place cards side-by-side was also a key HTML structural aspect.
* **Grid (Exercises 02 & 03)**: Involved using Bootstrap's responsive grid classes (`.col-*`, `.col-md-*`, `.col-lg-*`) within a `.container` and `.row`. The HTML structure was about creating `div` elements with these classes to match the target layouts across different screen sizes. The content was simple text ("One", "Two", etc.), so the HTML was primarily for layout structure.
* **Modal (Exercise 04)**: Required specific Bootstrap data attributes (`data-bs-toggle`, `data-bs-target`) and classes (`.modal`, `.modal-dialog`, `.modal-content`, etc.) to create the modal dialog and the button that triggers it. The HTML structure is fairly prescribed by Bootstrap for modals to function correctly.

The lab emphasized how Bootstrap abstracts complex layouts and components into reusable HTML class patterns.

### Accessibility

Bootstrap aims to provide accessible components out of the box.
* **Cards**: Semantic structure of headings, paragraphs, and links/buttons within cards is important. Alt text for images (even placeholders) is crucial.
* **Grid**: The reading order determined by the HTML source order is important, even if Bootstrap classes reorder elements visually. For these exercises, the source order generally matched the visual flow or was simple enough not to cause issues.
* **Modal**: Bootstrap modals include ARIA attributes (`aria-labelledby`, `aria-hidden`, `tabindex="-1"`, role="dialog") to manage focus and screen reader announcements. Ensuring these are correctly implemented (which they usually are when using Bootstrap's standard markup) is key. Keyboard navigation (e.g., closing with Escape key, trapping focus) is also a feature Bootstrap modals provide.
A WAVE audit would verify that the generated HTML (especially for the modal) uses these ARIA attributes correctly and that color contrasts meet standards (though card/modal default colors are usually compliant).

### CSS

The main CSS work in this lab involved fixing the conflict in the local `styles.css` file. The `.row > *` rule was too broad and interfered with the Card exercise. By making it more specific (e.g., `.styled-grid-row > *`), we ensured it only applied to the grid exercises (02 and 03) where the purple-styled cells were intended. This highlighted the importance of CSS specificity and modularity. Otherwise, this lab primarily relied on Bootstrap's own CSS for styling components and layouts, with minimal custom CSS needed beyond the provided `styles.css` for the grid cells. The exercise demonstrated leveraging a CSS framework rather than writing extensive custom CSS.