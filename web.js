
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

function myFunction(x) {
  x.classList.toggle("change");
}

function openNav() {
  document.getElementById("menu").style.width = "500px";
}

function closeNav() {
  document.getElementById("menu").style.width = "0";
}

function toggleNav() {
  var element = document.getElementById("menu");
  if (element.style.width == "500px") {
      element.style.width = "0px";
  } else {
      element.style.width = "500px";
  }
}