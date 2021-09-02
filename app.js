const nav = document.getElementById('nav')
const ikona = document.getElementById('ikona')

nav.addEventListener('click', function(){

  if (ikona.style.display === "none") {
    ikona.style.display = "block"
    ikona.style.top  = "28px"
    ikona.style.right = "28px"
  }
  else {
    ikona.style.display = "none"
  }



})