function responsiveNavMenu() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topbanner") {
    x.className += " responsive";
  } else {
    x.className = "topbanner";
  }
}