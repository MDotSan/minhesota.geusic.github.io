function responsiveNavMenu() {
  var x = document.getElementById("topNav");
  if (x.className === "w3-top") {
    x.className += "responsive";
  } else {
    x.className = "w3-top";
  }
}