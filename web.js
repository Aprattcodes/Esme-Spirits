function scrollFunction() {
  var elmnt = document.getElementById("glass");
  elmnt.scrollIntoView();
};

  function toggleNav() {
    let sideMenu = document.getElementById('menu');
    if (sideMenu.style.display === "none") {
      sideMenu.style.display = "block";
    } else {
      sideMenu.style.display = "none";
    };
  };

function toggleBar(x) {
  x.classList.toggle("change");
  if (toggleBar === true) {
    toggleNav()
  } else (
    false
  )
};



