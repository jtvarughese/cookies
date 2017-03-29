document.cookie = "hello=test"


// if(Cookies.get("sugar")){
//   alert("Nomnomnom")
// } else {
//   Cookies.set("name", "Joel")
//   alert("Buy more cookies")
// }
var buttonElement = document.querySelector("button")

var sugarCookie = document.getElementById('sugar')
var chocolateCookie = document.getElementById('chocolate')
var lemonCookie = document.getElementById('lemon')

buttonElement.addEventListener("click", function(){
  alert("Thank you buying a cookie!")
})
