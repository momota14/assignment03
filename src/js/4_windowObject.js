const openWindow = document.getElementById("openwin");

function openNewWindow() {
  const url = "https://www.example.com";
  const width = 800;
  const height = 600;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  const newWindow = window.open(
    url,
    "_blank",
    `width=${width}, height=${height}, left=${left}, top=${top}`
  );

  // Optional: Add focus to the new window
  if (newWindow) {
    newWindow.focus();
  }
}
