
function openTab(evt, TabName) {
  // Declare all variables
  var i, tabdesc, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabdesc = document.getElementsByClassName("tabdesc");
  for (i = 0; i < tabdesc.length; i++) {
    tabdesc[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
  // Get the element with id="defaultOpen" and click on it
} 
document.getElementById("defaultOpen").click();

