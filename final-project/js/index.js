document.getElementById("lastName").addEventListener("keydown", (event) => {
  let currKey = event.key;
  let currVal = "";
  currVal += currKey; 
  document.getElementById("displayLastName").innerHTML = currVal;
});