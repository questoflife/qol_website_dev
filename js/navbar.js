/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function handleResponsiveNavbar() {
  var x = document.getElementById("header-mynavbar");
  if (x.className === "mynavbar") {
    x.className += " responsive";
  } else {
    x.className = "mynavbar";
  }

  var x = document.getElementById("page-header");
  if (x.className === "page-header") {
    x.className += " responsive";
  } else {
    x.className = "page-header";
  }
  
}

/*
    * Check if the user agent is a mobile user agent.
    * @returns {boolean} True if the user agent is a mobile user agent, false otherwise.
    * @author Freb
 */
function isMobileUserAgent() {
  let isMobileUA = false;
  let isTouchDevice = false;
  let isCoarsePointer = false;
  try {
    isMobileUA = /Mobi|Android/i.test(navigator.userAgent);
  }
  catch (e) {
    // Handle error if needed
  }
  try {
    isTouchDevice = 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0;
  }
  catch (e) {
    // Handle error if needed
  }
  try {
    isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  }
  catch (e) {
    // Handle error if needed
  }
  return (isMobileUA || isTouchDevice || isCoarsePointer);
}

// Create a condition that targets viewports at least 720 wide
const mediaQuery = window.matchMedia('(min-width: 720px)');

function handleTabletChange() {
  if (!isMobileUserAgent()) {
    // Remove responsive class from mynavbar to switch from mobile/tablet to pc view
    var x = document.getElementById("header-mynavbar");
    x.className = "mynavbar";
  }
}

// Call handleTabletChange on load
handleTabletChange();
