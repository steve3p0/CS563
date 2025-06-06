## Code Review Exercise

### Issue #1: Accessibility - Missing Fieldset Legend and Grouping for Form Controls

The issue, why this is an issue, and the solution:

The checkboxes in the "What breeds would you like to learn?" section of the form are not properly grouped or given an accessible name. While a `div` is used to contain them, it lacks the semantic meaning that a `fieldset` and `legend` element would provide. This can make it difficult for users relying on assistive technologies to understand the purpose of the group of checkboxes and how they relate to the question being asked. [cite_start]A `fieldset` is used to group related elements in a web form, and the `legend` element provides a caption for the `fieldset`. This improves the accessibility and usability of the form, especially for screen reader users, as it clearly associates the question with its corresponding input fields.

Initial code:

```html
<div class="form-fieldset form-element-container">
  <p class="form-label">What breeds would you like to learn?</p>
  <div>
    <input type="checkbox" id="siamese" name="breed1" value="siamese" />
    <label for="siamese">Siamese Cat</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="british-shorthair"
      name="breed2"
      value="british-shorthair" />
    <label for="british-shorthair">British Shorthair</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="maine-coon"
      name="breed3"
      value="maine-coon" />
    <label for="maine-coon">Maine Coon</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="persian-cat"
      name="breed4"
      value="persian-cat" />
    <label for="persian-cat">Persian Cat</label>
  </div>
  <div>
    <input type="checkbox" id="ragdoll" name="breed5" value="ragdoll" />
    <label for="ragdoll">Ragdoll</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="sphynx-cat"
      name="breed6"
      value="sphynx-cat" />
    <label for="sphynx-cat">Sphynx Cat</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="american-shorthair"
      name="breed"
      value="american-shorthair" />
    <label for="american-shorthair">American Shorthair</label>
  </div>
</div>
```

Updated code:

```html
<fieldset class="form-fieldset form-element-container">
  <legend class="form-label">What breeds would you like to learn?</legend>
  <div>
    <input type="checkbox" id="siamese" name="breed1" value="siamese" />
    <label for="siamese">Siamese Cat</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="british-shorthair"
      name="breed2"
      value="british-shorthair" />
    <label for="british-shorthair">British Shorthair</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="maine-coon"
      name="breed3"
      value="maine-coon" />
    <label for="maine-coon">Maine Coon</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="persian-cat"
      name="breed4"
      value="persian-cat" />
    <label for="persian-cat">Persian Cat</label>
  </div>
  <div>
    <input type="checkbox" id="ragdoll" name="breed5" value="ragdoll" />
    <label for="ragdoll">Ragdoll</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="sphynx-cat"
      name="breed6"
      value="sphynx-cat" />
    <label for="sphynx-cat">Sphynx Cat</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="american-shorthair"
      name="breed"
      value="american-shorthair" />
    <label for="american-shorthair">American Shorthair</label>
  </div>
</fieldset>
```


### Issue #2: Semantic HTML - Incorrect Usage of p for Form Labels

The issue, why this is an issue, and the solution:

In the "Request Info" form, the span elements with class form-label are nested within p tags, and the input elements are direct siblings to these p tags. While this might visually achieve the desired layout, it is not semantically correct and can negatively impact form accessibility. The p tag is meant for paragraphs of text, not as a container for individual form labels or for structuring form elements in this manner. The label element is specifically designed to associate text with form controls, improving usability and accessibility by allowing users to click on the label to activate the associated input, and providing proper context for assistive technologies.

Initial code:

```html
<div
    class="space-between-distributed-row-container vertically-stacked-sm-screen-container">
    <p class="label-input-group form-element-container">
    <span class="form-label">Name</span>
    <input
        aria-label="name"
        class="form-input-box"
        type="text"
        id="name"
        name="name" />
    </p>
    <p class="label-input-group form-element-container">
    <span class="form-label">Username</span>
    <input
        aria-label="username"
        class="form-input-box"
        type="text"
        id="username"
        name="username" />
    </p>
</div>
<div
    class="space-between-distributed-row-container vertically-stacked-sm-screen-container">
    <p class="label-input-group form-element-container">
    <span class="form-label">Email</span>
    <input
        aria-label="email"
        class="form-input-box"
        type="email"
        id="email"
        name="email" />
    </p>
    <p class="label-input-group form-element-container">
    <span class="form-label">Phone Number</span>
    <input
        aria-label="phone"
        class="form-input-box"
        type="tel"
        id="phone-number"
        name="phone-number" />
    </p>
</div>
```

Updated code:

```html
<div class="space-between-distributed-row-container vertically-stacked-sm-screen-container">
  <div class="form-element-container">
    <label for="name" class="form-label">Name</label>
    <input class="form-input-box" type="text" id="name" name="name" />
  </div>
  <div class="form-element-container">
    <label for="username" class="form-label">Username</label>
    <input class="form-input-box" type="text" id="username" name="username" />
  </div>
</div>
<div class="space-between-distributed-row-container vertically-stacked-sm-screen-container">
  <div class="form-element-container">
    <label for="email" class="form-label">Email</label>
    <input class="form-input-box" type="email" id="email" name="email" />
  </div>
  <div class="form-element-container">
    <label for="phone-number" class="form-label">Phone Number</label>
    <input class="form-input-box" type="tel" id="phone-number" name="phone-number" />
  </div>
</div>
```

### Issue #3: Functional Bug / Semantic Issue - Incorrect Placement of Form Submission and Reset Buttons

The issue, why this is an issue, and the solution:

At the bottom of the "Request Info" section, there are two buttons for "submit" and "reset." These are implemented using `<input type="submit">` and `<input type="reset">` elements. However, these elements are placed outside the main `<form>` element they are intended to control. According to HTML specifications, form controls like submit and reset buttons must be nested within the `<form>` tag they belong to.  Placing them outside breaks their inherent association with the form, which can lead to a critical functional bug: the form will not submit its data, nor will the reset button clear the form fields as intended.  This also has semantic implications, as the document structure does not accurately represent the relationship between the buttons and the form. Using `<button type="submit">` and `<button type="reset">` is generally preferred for submit/reset actions as they offer more flexibility in content (e.g., embedding icons or richer text) and are also clearly associated with their parent form.

Initial code:

```html
<form id="RequestInfo" class="content-container form">
  <label class="form-label" for="message"
    >Feel free to leave a message to us</label
  >
  <textarea
    class="form-textarea form-element-container"
    name="message"
    id="message"
    cols="30"
    rows="10"></textarea>
</form>
<div
  class="form space-evenly-distributed-row-container form-buttons-container">
  <input class="form-button" type="submit" value="submit" />
  <input class="form-button" type="reset" value="reset" />
</div>
```

Updated code:

```html
<form id="RequestInfo" class="content-container form">
  <label class="form-label" for="message"
    >Feel free to leave a message to us</label
  >
  <textarea
    class="form-textarea form-element-container"
    name="message"
    id="message"
    cols="30"
    rows="10"></textarea>
  <div
    class="space-evenly-distributed-row-container form-buttons-container">
    <button class="form-button" type="submit">Submit</button>
    <button class="form-button" type="reset">Reset</button>
  </div>
</form>
```
