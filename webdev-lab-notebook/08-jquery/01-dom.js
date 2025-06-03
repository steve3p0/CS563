// Ensure the DOM is ready before running jQuery code
$(document).ready(function() {
  // Exercise #1:
  // When the user clicks the 'copy' button, copy the user input to the output area

  // Fetch jQuery objects representing specific elements in the DOM
  const $userInput1 = $('#userInput1');
  const $copyButton = $('#copy');
  const $output1 = $('#output1');

  // Add an event listener on the target element using jQuery
  $copyButton.on('click', function() {
    // Callback function to handle event
    const inputValue = $userInput1.val(); // Get value using jQuery's .val()
    $output1.text(inputValue);          // Set text using jQuery's .text()
  });

  // Exercise #2:
  // When the user enters input text, copy the user input to the output area

  // Fetch jQuery objects representing specific elements in the DOM
  const $userInput2 = $('#userInput2');
  const $output2 = $('#output2');

  // Add an event listener on the target element using jQuery
  $userInput2.on('input', function() {
    // Callback function to handle event
    // $(this) refers to the element that triggered the event ($userInput2)
    const inputValue = $(this).val();
    $output2.text(inputValue);
  });
});