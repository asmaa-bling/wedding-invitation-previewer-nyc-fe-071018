let currVal = "";

document.getElementById("lastName").addEventListener("keydown", (event) => {
  let currKey = event.key;
  if(event.keyCode === 9 || event.keyCode === 13 || event.keyCode === 16){
    return false;
  }
  
  if (event.keyCode === 8){
    currVal = currVal.slice(0, -1);
  }
  currVal += currKey; 
  document.getElementById("displayLastName").innerHTML = currVal;
});