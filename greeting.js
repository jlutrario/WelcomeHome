var date = new Date();
var hr = date.getHours();

var greeting = "";

if (hr >= 0 && hr <= 11) {
  greeting = "Good Morning";
}
else if (hr >= 12 && hr <= 16) {
  greeting = "Good Afternoon";
}
else {
  greeting = "Good Evening"
}

var name = localStorage.getItem('name');

if (name == 'null' || name == 0) {
  document.getElementById("greeting").innerHTML = greeting + "!";
} else {
  document.getElementById("greeting").innerHTML = greeting + ", " + name + "!";
}