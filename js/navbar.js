/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function handleResponsiveNavbar() {
  const icon = document.getElementById("menu-icon");
  // For example:
  const menuOpen = icon.classList.contains("fa-bars"); // or track this with a separate variable

  if (menuOpen) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
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
    console.log(e)
  }
  try {
    isTouchDevice = 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0;
  }
  catch (e) {
    console.log(e)
  }
  try {
    isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  }
  catch (e) {
    console.log(e)
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
