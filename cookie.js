// document.addEventListener("DOMContentLoaded", function(){
  // Cookies.get()

  var sugar = document.querySelector("#sugarButton");
  var chocolate = document.querySelector("#chocolateButton");
  var lemon = document.querySelector("#lemonButton");
  var clear = document.querySelector("#clearButton");



  // Cookies.set("sugar", sugarValue);
  // Cookies.set("chocolate", chocolateValue);
  // Cookies.set("lemon", lemonValue);

  sugar.addEventListener("click", function(event){
    event.preventDefault();
      alert("You added a sugar cookie");
      sugarValue ++
      Cookies.set("sugar", sugarValue);
      sugar.innerHTML = sugarValue;
  })

  chocolate.addEventListener("click", function(event){
    event.preventDefault()
      alert("You added a chocolate cookie")
      chocolateValue ++
      Cookies.set("chocolate", chocolateValue)
      chocolate.innerHTML = chocolateValue
  })

  lemon.addEventListener("click", function(event){
    event.preventDefault();
      alert("You added a lemon cookie");
      lemonValue ++
      Cookies.set("lemon", lemonValue);
      lemon.innerHTML = lemonValue;
  })

  clear.addEventListener("click", function(event){
    event.preventDefault();
      // alert("Are you sure that you want to do that?");
      sugar.innerHTML = sugarValue = 0;
      chocolate.innerHTML = chocolateValue = 0;
      lemon.innerHTML = lemonValue = 0;
  })

  var sugarValue
  var chocolateValue
  var lemonValue

  function sugarSave (){
    sugarValue = Cookies.get("sugar") || 0;
    sugar.innerHTML = sugarValue
  };
  function chocolateSave (){
    chocolateValue = Cookies.get("chocolate") || 0;
    chocolate.innerHTML = Cookies.get("chocolate") || 0;
  };
  function lemonSave (){
    lemonValue = Cookies.get("lemon") || 0;
    lemon.innerHTML = Cookies.get("lemon") || 0;
  };

  window.onload = sugarSave();
  window.onload = chocolateSave();
  window.onload = lemonSave();
