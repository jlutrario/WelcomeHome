setInterval(getTime, 1000);
getDate();

function getTime() {
  var date = new Date();

  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var pd = "AM";

  while (hr == 0 && min == 0 && sec == 0) {
    getDate();
  }

  if (hr == 0) {
    hr = 12;
  } else if (min == 0 && sec == 0) {
    getDate();
  }
  if (hr > 12) {
    hr = hr - 12;
    pd = "PM";
  }
  if (hr >= 1 && hr < 10) {
    hr = "0" + hr;
  }
  if (min >= 0 && min < 10) {
    min = "0" + min;
  }
  if (sec >= 0 && sec < 10) {
    sec = "0" + sec;
  }

  document.getElementById("time").innerHTML = hr + ":" + min + ":" + sec + " " + pd;
}

function getDate() {
  var date = new Date();

  var weekday = date.getDay();
  var month = date.getMonth();
  var day = date.getDate();
  var year = date.getFullYear();

  if (weekday == 0) {
    weekday = "Sunday";
  } else if (weekday == 1) {
    weekday = "Monday";
  } else if (weekday == 2) {
    weekday = "Tuesday";
  } else if (weekday == 3) {
    weekday = "Wednesday";
  } else if (weekday == 4) {
    weekday = "Thursday";
  } else if (weekday == 5) {
    weekday = "Friday";
  } else {
    weekday = "Saturday";
  }

  if (month == 0) {
    month = "January";
  } else if (month == 1) {
    month = "February";
  } else if (month == 2) {
    month = "March";
  } else if (month == 3) {
    month = "April";
  } else if (month == 4) {
    month = "May";
  } else if (month == 5) {
    month = "June";
  } else if (month == 6) {
    month = "July";
  } else if (month == 7) {
    month = "August";
  } else if (month == 8) {
    month = "September";
  } else if (month == 9) {
    month = "October";
  } else if (month == 10) {
    month = "November";
  } else {
    month = "December";
  }

  document.getElementById("date").innerHTML = weekday + ", " + month + " " + day + ", " + year;
}