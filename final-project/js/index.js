document.getElementById("lastName").addEventListener("keydown", (event) => {
  let currentVal = event.key;
  currentVal += eventKey; 
  document.getElementById("displayLastName").innerHTML = currentVal;
  
  
});