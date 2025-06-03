## Reflection Document

### HTML

For Lab 05, the primary focus was on CSS to manipulate existing HTML structures. The HTML in `01-grid.html` provided clear, numbered items, which made targeting them straightforward. For `02-grid-areas.html`, the semantic elements (`header`, `article`, etc.) were already in place, making the application of `grid-area` logical. The key was ensuring the CSS Grid properties correctly arranged these pre-defined HTML elements. No significant HTML structural changes were needed beyond ensuring the class names aligned with the CSS selectors.

### Accessibility

Accessibility in this lab largely depended on the initial HTML structure. Since we were focused on layout via CSS Grid, the accessibility implications were more about ensuring that the chosen layouts didn't negatively impact reading order or keyboard navigation. For example, ensuring that visual reordering in the grid still made sense semantically. The use of semantic HTML elements in `02-grid-areas.html` (like `<header>`, `<article>`, `<aside>`) is beneficial for accessibility. If the layouts are responsive and don't cause content overlap or unreadable text due to an awkward CSS grid setup, accessibility should be maintained. The color contrast of the purple boxes with white text (from the shared `styles.css`) would be a point to check with WAVE, though this was part of the provided styling.

### CSS

This lab was heavily CSS-focused, specifically on CSS Grid.
* **Exercise 01 (CSS Grid)** involved translating visual layouts into `grid-template-columns`, `grid-template-rows`, and sometimes specific `grid-column` or `grid-row` properties for individual items (e.g., `item8` in Grid Container 3, and multiple items in Grid Container 4). The iterative refinement based on visual feedback (column/row proportions) was key. The `gap` property was essential for the spacing seen in the target images.
* **Exercise 02 (CSS Grid Areas)** demonstrated a more declarative way to define layouts. Assigning `grid-area` to elements and then defining the `grid-template-areas` string provided a clear, visual way to structure the page. The challenge was translating the different visual layouts (desktop, tablet, mobile as discussed for the responsive version) into distinct `grid-template-areas` and corresponding `grid-template-columns` and `grid-template-rows` within media queries. This approach makes the CSS very readable for layout purposes.
The concept of `fr` units was crucial for creating flexible and proportional tracks in both exercises.