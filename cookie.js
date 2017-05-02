document.addEventListener("DOMContentLoaded", function(){
  // Cookies.get()

  var sugar = document.querySelector("#sugarButton");
  var chocolate = document.querySelector("#chocolateButton");
  var lemon = document.querySelector("#lemonButton");
  var clear = document.querySelector("#clearButton");

  var sugarValue = 0;
  var chocolateValue = 0;
  var lemonValue = 0;

  // Cookies.set("sugar", sugarValue);
  // Cookies.set("chocolate", chocolateValue);
  // Cookies.set("lemon", lemonValue);

  sugar.addEventListener("click", function(){
    event.preventDefault();
      alert("You added a sugar cookie");
      sugarValue += 1;
      Cookies.set("sugar", sugarValue);
      sugar.innerHTML = sugarValue;
  })

  chocolate.addEventListener("click", function(){
    event.preventDefault()
      alert("You added a chocolate cookie")
      chocolateValue += 1
      Cookies.set("chocolate", chocolateValue)
      chocolate.innerHTML = chocolateValue
  })

  lemon.addEventListener("click", function(){
    event.preventDefault();
      alert("You added a lemon cookie");
      lemonValue += 1;
      Cookies.set("lemon", lemonValue);
      lemon.innerHTML = lemonValue;
  })

  clear.addEventListener("click", function(){
    event.preventDefault();
      // alert("Are you sure that you want to do that?");
      sugar.innerHTML = sugarValue = 0;
      chocolate.innerHTML = chocolateValue = 0;
      lemon.innerHTML = lemonValue = 0;
  })


  function sugarSave (){
    sugar.innerHTML = Cookies.get("sugar");
  };
  function chocolateSave (){
    chocolate.innerHTML = Cookies.get("chocolate");
  };
  function lemonSave (){
    lemon.innerHTML = Cookies.get("lemon");
  };

  window.onload = sugarSave();
  window.onload = chocolateSave();
  window.onload = lemonSave();

})
