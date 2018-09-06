let currVal = "";

document.getElementById("lastName").addEventListener("keydown", (event) => {
  let currKey = event.key;
  if(event.keyCode === 8 ){
    return false;
  }
  currVal += currKey; 
  document.getElementById("displayLastName").innerHTML = currVal;
});