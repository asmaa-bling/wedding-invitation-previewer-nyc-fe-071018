let currVal = "";

document.getElementById("lastName").addEventListener("keydown", (event) => {
  let currKey = event.key;
  if(event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 13 || event.keyCode === 16){
    return false;
  }
  
  if (event.keyCode === 8){\
    currKey.split("");
  }
  currVal += currKey; 
  document.getElementById("displayLastName").innerHTML = currVal;
});