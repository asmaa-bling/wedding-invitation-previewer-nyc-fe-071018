let currVal = "";

document.getElementById("lastName").addEventListener("keydown", (event) => {
  let currKey = event.key;
  currVal += currKey; 
  document.getElementById("displayLastName").innerHTML = currVal;
});