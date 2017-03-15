var shipList = [];

var Ship = function(shipName, weapon, price){
  this.name = name;
  this.weapon = weapon;
  this.price = price;
  // shipList.push(this);
  
}

var myShip = new Ship('Enterprise', 'Ion Cannons', 6000);

shipList.push(myShip);

console.log(shipList)

var displayShips = function(item){
  document.getElementById("shipDisplay").innerHTML += ( item.weapon + " " + item.weapon + " " + item.price);
}  

//var container = document.getElementById("textSpace");
//  container.innerHTML = "This text has been changed " + i + " times";
