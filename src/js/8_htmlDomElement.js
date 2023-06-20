var btn = document.getElementById("myButton"); // Event handler for button click event
function handleButtonClick() {
  const paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "Button Clicked!";
}

// Add event listener to the button
btn.addEventListener("click", handleButtonClick);
