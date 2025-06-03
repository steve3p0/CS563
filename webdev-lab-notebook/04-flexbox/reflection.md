## Reflection Document

### HTML

For Lab 4, the HTML (`07-flexbox.html`) served as the structural foundation for demonstrating various Flexbox layouts. Each layout was contained within a `<section>` element, acting as a flex container, and the individual numbered boxes were `div` elements with a common `flex-item` class and specific `itemX` classes. This organized and consistent HTML structure made it straightforward to apply different Flexbox properties to each container to achieve the desired visual arrangements. The HTML itself remained relatively simple, allowing the focus to be entirely on the CSS Flexbox properties.

### Accessibility

Wave AIM: A contrast error was reported on exercise 05-position.  However, since the instructor wants us to match the screenshots that is provided in the instructions markdown, we will leave it as-is.

While Flexbox is primarily a layout module, its correct implementation can significantly contribute to accessibility:
* **Logical Order vs. Visual Order:** The ability to visually reorder items using the `order` property (as demonstrated in `flex-container-4`) without changing the underlying source HTML order is crucial for accessibility. This ensures that screen readers, which follow the document's source order, still present content in a logical sequence, even if the visual presentation is different.
* **Responsiveness:** Flexbox inherently supports responsive design. By allowing items to wrap (`flex-wrap: wrap;`) and adjusting alignments based on available space, layouts can adapt gracefully to different screen sizes. This ensures that content remains readable and navigable for users on various devices or those who zoom in, which is a fundamental aspect of inclusive design.
* **Content Readability:** Using properties like `justify-content` and `align-items` to distribute space and align items ensures that content within the flex items remains well-spaced and readable, preventing text from overlapping or becoming squished.

### CSS

Lab 4 was a hands-on deep dive into CSS Flexbox, demonstrating its power and flexibility in creating complex layouts. I gained practical experience with a variety of Flexbox properties to replicate distinct visual arrangements:

* **`display: flex;`**: This foundational property was applied to all `.flex-container` elements, establishing them as flex containers and enabling Flexbox behavior for their direct children.
* **`flex-wrap: wrap;` and `flex-wrap: nowrap;`**: I used `wrap` to allow items to flow onto new lines when the container width was insufficient (e.g., `flex-container-1`, `flex-container-2`, `flex-container-3`, `flex-container-4`, `flex-container-6`) and `nowrap` where items were forced onto a single line (`flex-container-5`).
* **`flex-direction`**:
    * `row-reverse`: Used in `flex-container-2` to reverse the order of items horizontally, arranging them from right to left.
    * `column` and `column-reverse`: Employed in `flex-container-3` (to arrange items vertically and then reverse the column order) and `flex-container-6` (to stack items vertically before wrapping into new columns).
* **Alignment Properties (`justify-content`, `align-items`, `align-content`):**
    * `justify-content: center;`: Used for `flex-container-1` and `flex-container-4` to center items along the main axis (horizontally).
    * `justify-content: space-between;`: Applied in `flex-container-5` to distribute space evenly between items, pushing the first to the start and the last to the end.
    * `align-items: flex-start;` and `align-items: center;`: Used to align items along the cross axis (vertically) within their line, as seen in `flex-item` styling and `flex-container-5` (centering taller items).
    * `align-content: flex-start;` and `align-content: flex-end;`: Used for `flex-container-1` and `flex-container-3` respectively to align wrapped lines of content within the flex container along the cross axis.
* **`gap` Property**: I effectively used `gap` (or `row-gap`/`column-gap`) to introduce spacing between flex items, making layouts cleaner and more visually appealing (e.g., `flex-container-1`, `flex-container-2`, `flex-container-3`, `flex-container-5`, `flex-container-6`).
* **`order` Property**: In `flex-container-4`, the `order` property was critical to visually reorder items (6, 7, 8 appearing before 1, 2, 3, 4, 5) without altering their position in the HTML source. This property is invaluable for design flexibility while preserving semantic order.
* **Creating Gaps/Line Breaks**: The `::after` pseudo-element with `flex-basis: 100%` was a clever technique used in `flex-container-4` to force a line break, ensuring specific items appeared on the second row even if space was available on the first.
* **Dynamic Sizing**: Properties like `height` with `calc()` were used to define the container's height based on item sizes and gaps, crucial for `flex-container-3` and `flex-container-6` to ensure proper wrapping.

This lab provided a strong practical foundation in Flexbox, equipping me with the skills to tackle various layout challenges efficiently and responsively.