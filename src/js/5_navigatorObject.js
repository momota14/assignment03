const browserName = document.getElementById("browserName");
const browserVersion = document.getElementById("browserVersion");

console.log(navigator);

function detectBrowser() {
  let browserName = "";
  let browserVersion = "";
  
  if (navigator.userAgentData !== undefined) {
    browserName = navigator.userAgentData.brands[2].brand;
    browserVersion = navigator.userAgentData.brands[2].version;
  } else {
    browserName = navigator.appCodeName;
    browserVersion = navigator.appVersion;
  }

  return {
    name: browserName,
    version: browserVersion,
  };
}

const browserInfo = detectBrowser();
console.log("Browser Name:", browserInfo.name);
console.log("Browser Version:", browserInfo.version);
browserName.innerHTML = `<b>Browser Name:</b> ${browserInfo.name}`;
browserVersion.innerHTML = `<b>Browser Version:</b> ${browserInfo.version}`;
