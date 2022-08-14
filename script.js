var c = 1;
var x;
var i;
var a;
var b;
function create() {
  var div1 = document.getElementById("div1");
  div1.innerHTML = "";
  var str = "";

  var operation = document.getElementById("operation").value;
  var range = document.getElementById("range").value;
  var amount = document.getElementById("count").value;

  for (var i = 1; i <= amount; i++) {
    var p = document.createElement("p");
    a = Math.round(Math.random() * range);
    b = Math.round(Math.random() * range);
    str += "" + i + ".  " + a + operation + b + "=";
    p.innerHTML = str;
    div1.appendChild(p);
    str = "";
  }
}
