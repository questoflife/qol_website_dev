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

// Create a condition that targets viewports at least 992px wide
const mediaQuery = window.matchMedia('(min-width: 992px)');

function handleTabletChange(e) {
  if (e.matches) {
    // Remove responsive class from mynavbar to switch from mobile/tablet to pc view
    var x = document.getElementById("header-mynavbar");
    x.className = "mynavbar";
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);
