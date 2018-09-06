let currVal = "";

document.getElementById("lastName").addEventListener("keydown", (event) => {
  let currKey = event.key;
  if(currkey)
  currVal += currKey; 
  document.getElementById("displayLastName").innerHTML = currVal;
});