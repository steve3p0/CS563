## Reflection Document

### HTML

Lab 3 focused predominantly on CSS styling and layout techniques, but it relied on well-structured HTML as its foundation. The HTML files provided a variety of elements and structures necessary for applying the CSS, including:

* **Semantic elements:** Using elements like `<header>`, `<nav>`, `<ul>`, `<li>`, `<a>`, `<section>`, `<article>`, and `<aside>` provided clear semantic meaning to the content, which is crucial for applying targeted CSS rules.
* **IDs and Classes:** The exercises extensively used `id` and `class` attributes to apply specific styles, demonstrating how these serve as hooks for CSS selectors.
* **Accessibility foundations:** Even though CSS was the main focus, the HTML structures implicitly supported accessibility (e.g., proper list structures, logical content flow for screen readers).

The HTML served as the canvas upon which the various CSS styling and layout techniques were demonstrated.

### Accessibility

Wave AIM: A contrast error was reported on exercise 05-position.  However, since the instructor wants us to match the screenshots that is provided in the instructions markdown, we will leave it as-is.

While not the primary focus of Lab 3, accessibility considerations were implicitly addressed through good HTML practices and CSS implementation:

* **Semantic HTML:** As noted in the HTML reflection, the use of semantic HTML elements (`<nav>`, `<section>`, etc.) naturally contributes to a more accessible document outline for assistive technologies.
* **Media Queries for Responsiveness:** The media query exercise is a prime example of accessible design. By adapting the layout and colors based on viewport size, the content remains usable and readable across various devices, which benefits users with different screen sizes or those who zoom in on content. This ensures content is not truncated or unreadable on smaller screens.
* **Color Contrast:** While not explicitly audited in this lab, the color changes in the media queries (`var(--purple)` to `var(--orange)` to `var(--green)`) would ideally be chosen with color contrast in mind to ensure readability for all users.
* **`alt` attributes (reiteration from Lab 1, though not directly in Lab 3's code):** Although no new images were added in this lab, the consistent practice of using `alt` attributes, as learned in Lab 1, would remain crucial for any images included in the layouts.

### CSS

Lab 3 was a comprehensive exploration of core CSS concepts, significantly deepening my understanding of styling and layout:

* **Selectors:** I gained a more nuanced understanding of CSS selectors, including attribute selectors (`[class~="dog"]`, `li#cat`), descendant selectors (`.list-food ol > li.first`), adjacent sibling selectors (`+ li`), and pseudo-classes (`:nth-child`) and pseudo-elements (`::first-letter`). This exercise highlighted how precise selectors allow for highly targeted styling.
* **Specificity:** The specificity exercise was crucial for understanding how the browser resolves conflicting CSS rules. By analyzing and applying different selectors, I learned how to calculate specificity (e.g., `id`, `class`, element type) and predict which rule would take precedence.
* **Box Model and Layout (`float`):** The layout exercises reinforced the box model and introduced `float` for creating multi-column layouts. I learned about `float: left;`, `float: right;`, and the importance of `clear: both;` (often via a `::after` pseudo-element) to prevent content from overlapping floated elements. This provided a foundational understanding of older layout techniques.
* **Positioning (`static`, `relative`, `absolute`, `fixed`):** This section clarified the various CSS `position` properties. I explored how `static` is the default flow, `relative` allows for offset positioning relative to its normal position, `absolute` positions an element relative to its closest positioned ancestor, and `fixed` positions an element relative to the viewport. The media query integration showed how these positions can be dynamically altered based on screen size.
* **Media Queries and Responsive Design:** The media queries exercise was a practical application of responsive web design principles. I implemented breakpoints to change the `background` and `color` of the `body` and adjust navigation layout (`flex-direction`) based on viewport width (e.g., for mobile, tablet, and desktop views). This demonstrated how to create adaptive designs that provide an optimal viewing experience across a range of devices.
* **CSS Custom Properties (Variables):** The consistent use of `:root` variables (e.g., `--purple`, `--orange`, `--green`) throughout the CSS files for colors simplified styling and made the stylesheets more maintainable and easier to update.

In summary, Lab 3 was instrumental in building a strong foundation in CSS, covering everything from fundamental selectors and specificity to advanced layout and responsive design techniques.