document.getElementById("lastName").addEventListener("keydown", (event) => {
  const keyVal = event.key;
  document.getElementById("displayLastName").innerHTML = keyVal;
});