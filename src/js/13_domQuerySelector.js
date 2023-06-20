function changeTextColor() {
  const paragraphs = document.querySelectorAll(".special");

  paragraphs.forEach(function (paragraph) {
    paragraph.classList.add("highlighted");
  });
}
