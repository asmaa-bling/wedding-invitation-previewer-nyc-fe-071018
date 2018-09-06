let currVal = "";

function invitePrint(fieldName, displayName) {
  document.getElementById(fieldName).addEventListener("keydown", (event) => {
    let currKey = event.key;
    if(event.keyCode === 9 || event.keyCode === 13 || event.keyCode === 16){
      return false;
    } else if (event.keyCode === 8){
      currVal = currVal.slice(0, -1);
    } else {
      currVal += currKey;
    }
  
    document.getElementById(displayName).innerHTML = currVal;
  });
}

invitePrint("firstName", "displayName");