const lat = document.getElementById("lat");
const lon = document.getElementById("lon");

function getCurrentLocation() {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        (error) => reject(error)
      );
    });
  } else {
    return Promise.reject(
      new Error("Geolocation is not supported by this browser.")
    );
  }
}

getCurrentLocation()
  .then((coords) => {
    console.log("Latitude:", coords.latitude);
    console.log("Longitude:", coords.longitude);
    lat.innerHTML = `<b>Latitude:</b> ${coords.latitude}`;
    lon.innerHTML = `<b>Longitude:</b> ${coords.longitude}`;
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
