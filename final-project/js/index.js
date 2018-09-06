document.getElementById("firstName").addEventListener("keydown", (event) => {
  const keyVal = event.key;
  document.getElementById("displayFirstName").innerHTML = keyVal;
});