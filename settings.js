function checkModal() {
  var name = document.getElementById("name").value;
  var zip = document.getElementById("zip").value;
  
  if (name != "") {
    localStorage.setItem('name', name);
  }

  if (zip != "") {
    localStorage.setItem('zip', zip);
  }

  location.reload();
}