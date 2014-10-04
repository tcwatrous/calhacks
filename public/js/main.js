$(document).ready(function() {

  // Place JavaScript code here...

function swapImage(id,primary,secondary) {
    src=document.getElementById(id).src;
    if (src.match(primary)) {
      document.getElementById(id).src=secondary;
    } else {
      document.getElementById(id).src=primary;
    }
  }

});
