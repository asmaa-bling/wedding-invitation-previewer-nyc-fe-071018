document.getElementById("lastName").addEventListener("keydown", (event) => {
  const eventKey = event.key;
  let fullInput = 
  document.getElementById("displayLastName").innerHTML = eventKey;
});