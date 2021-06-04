getWeather();

async function getWeather() {
  const response = await fetch('https://freegeoip.app/json/')
    .then(response => response.json())
    .then(response => showCity(response));
}

async function getTemps(response) {
  const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + response.city + ',' + response.region_code + ',' + response.country_code + '&units=imperial&appid=a3d052fd96a1f477aeaab4cbd25522c8')
    .then(res => res.json())
    .then(res => showCondition(res));
}

function showCity(response) {
  document.getElementById("city").innerHTML = response.city + ", " + response.region_code;
  getTemps(response);
}

function showCondition(res) {
  document.getElementById("icon").src = "http://openweathermap.org/img/w/" + res.weather[0].icon + ".png";
  document.getElementById("cond").innerText = res.weather[0].description;
  showTemps(res);
}

function showTemps(res) {
  document.getElementById("temp").innerText = Math.floor(res.main.temp) + "ºF";
  document.getElementById("high").innerText = "H: " + Math.floor(res.main.temp_max) + "º";
  document.getElementById("low").innerText = "L: " + Math.floor(res.main.temp_min) + "º";
}