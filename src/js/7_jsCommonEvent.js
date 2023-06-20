// Event handler for click event
function handleClick(event) {
  const x = event.clientX;
  const y = event.clientY;
  alert(`Clicked at coordinates: (${x}, ${y})`);
}

// Event handler for keydown event
function handleKeydown(event) {
  const keyCode = event.keyCode;
  alert(`Key pressed: ${keyCode}`);
}

// Event handler for mouseover event
function handleMouseover() {
  const image = document.getElementById("myImage");
  image.src = "/src/img/img2.jpg";
}

// Add event listeners
document.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeydown);
document
  .getElementById("myImage")
  .addEventListener("mouseover", handleMouseover);
