function invitePrint(fieldName, displayName) {
  let currVal = "";
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

function getInitials(nameOne, nameTwo, displayName){
  let firstName = document.getElementById(nameOne).value;
  let secondName = document.getElementById(nameTwo).value;
  document.getElementById(displayName).innerHTML = `${firstName.chartAt(0)} & ${secondName.chartAt(0)}`;
}

getInitials("firstName", secondName, displayInitials);
invitePrint("lastName", "displayLastName");
invitePrint("date", "displayDate");
invitePrint("weddingLocation", "displayLocation");