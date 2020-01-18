
function scrollFunction() {
    var elmnt = document.getElementById("glass");
    elmnt.scrollIntoView();
  };

  function on() {
    document.getElementById("overlay").style.display = "block";
  };
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  };

  function ginClick() {
    var gin = document.getElementById('ginLabel');
    gin.addEventListener("click", function on(){
    document.getElementById("overlay").style.display = "block";
  })
};

  