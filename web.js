
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

var colors = ['#fb5714', '#00ff00', '#0000ff'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('rectangle').style.color = random_color;

function myFunction(x) {
  x.classList.toggle("change");
}