## Reflection Document

### HTML

This lab focused exclusively on improving the accessibility of an HTML form. The core task involved identifying and rectifying common accessibility pitfalls that were present in the starter file. The primary HTML elements involved were `<form>`, `<label>`, `<input>` (of various types like `text`, `email`, `radio`), `<fieldset>`, and `<legend>`, all of which are critical for an accessible form structure.

### Accessibility

Wave AIM: No reported errors or alerts.

This lab provided a practical understanding of how to implement accessibility best practices for web forms. The key steps and learnings were:

* **Using `label` elements correctly:** The most significant fix involved ensuring that every form input had an associated `<label>` element. In the starter file, some inputs either lacked a label or used `<span>` tags which do not provide semantic linking. By explicitly associating labels with inputs using the `for` attribute matching the input's `id`, screen readers can correctly identify the purpose of each input field.
* **Grouping related controls with `fieldset` and `legend`:** For the "Favorite Character" radio buttons, the use of `<fieldset>` and `<legend>` was crucial. This visually and semantically groups related radio buttons, allowing screen reader users to understand that these options belong together under a common question. The starter file used `<span>` and `<div>` which do not provide this semantic grouping.
* **Validation attributes:** Adding the `required` attribute to the name and email input fields informs both the browser and assistive technologies that these fields must be filled out before submission.
* **Impact of Accessibility Audits:** Running an accessibility audit tool like Wave (or Lighthouse) was essential. It systematically highlighted specific accessibility violations, such as missing labels or improper grouping, providing actionable feedback to improve the form's usability for all users, including those relying on assistive technologies. Addressing these issues ensures a more inclusive user experience.

### CSS

N/A