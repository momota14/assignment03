function createListItems() {
  const ul = document.getElementById("myList");

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  }
}

// Call the function to create list items
createListItems();
