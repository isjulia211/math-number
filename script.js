var c = 1;
var x;
var i;
var frontNumber;
var endNumber;

function start() {
  var operation = document.getElementById("operation").value;
  console.log(operation);
  var range = document.getElementById("range").value;
  var amount = document.getElementById("amount").value;
  var displayQuestions = document.getElementById("displayQuestions");
  if (operation == "add") {
    adding(range, amount, displayQuestions);
  } else if (operation == "subtract") {
    subtraction(range, amount, displayQuestions);
  } else if (operation == "times") {
    Multiplication(range, amount, displayQuestions);
  } else {
    division(range, amount, displayQuestions);
  }
}

// adding
function adding(range, amount, displayQuestions) {
  // clear the display question area
  displayQuestions.innerHTML = "";
  var str = "";
  for (var i = 1; i <= amount; i++) {
    var p = document.createElement("p");
    frontNumber = Math.round(Math.random() * range);
    endNumber = Math.round(Math.random() * range);
    str += "" + i + ".  " + frontNumber + " + " + endNumber + " =";
    p.innerHTML = str;
    displayQuestions.appendChild(p);
    str = "";
  }
}
// subtraction
function subtraction(range, amount, displayQuestions) {
  // clear the display question area
  displayQuestions.innerHTML = "";
  var str = "";
  for (var i = 1; i <= amount; i++) {
    var p = document.createElement("p");
    frontNumber = Math.round(Math.random() * range);
    endNumber = Math.round(Math.random() * range);
    if (frontNumber < endNumber) {
      var temp;
      temp = frontNumber;
      frontNumber = endNumber;
      endNumber = temp;
    }
    str += "" + i + ".  " + frontNumber + " - " + endNumber + " =";
    p.innerHTML = str;
    displayQuestions.appendChild(p);
    str = "";
  }
}
// multiply
function Multiplication(range, amount, displayQuestions) {
  // clear the display question area
  displayQuestions.innerHTML = "";
  var str = "";
  for (var i = 1; i <= amount; i++) {
    var p = document.createElement("p");
    frontNumber = Math.round(Math.random() * range);
    endNumber = Math.round(Math.random() * range);
    str += "" + i + ".  " + frontNumber + " &times; " + endNumber + " =";
    p.innerHTML = str;
    displayQuestions.appendChild(p);
    str = "";
  }
}

// division
function division(range, amount, displayQuestions) {
  // clear the display question area
  displayQuestions.innerHTML = "";
  var str = "";
  for (var i = 1; i <= amount; i++) {
    var p = document.createElement("p");

    endNumber = Math.round(Math.random() * range);
    frontNumber = endNumber * Math.round(Math.random() * range);

    str += "" + i + ".  " + frontNumber + " &divide; " + endNumber + " =";
    p.innerHTML = str;
    displayQuestions.appendChild(p);
    str = "";
  }
}
