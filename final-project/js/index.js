let currVal = "";

document.getElementById("lastName").addEventListener("keydown", (event) => {
  let currKey = event.key;
  if(event.keyCode)
  currVal += currKey; 
  document.getElementById("displayLastName").innerHTML = currVal;
});