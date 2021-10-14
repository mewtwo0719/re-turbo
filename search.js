//populating table from json

const loadData = document.getElementById("loadData");

for(var i = 0; i < data.baza.length; i++){
    let tr = document.createElement("tr");
    tr.classList.add('tableRow')
    tr.innerHTML = `
    <th scope="row">${i}</th>
    <td class="SearchTPN" >${data.baza[i]["RE-TURBO PN"]}</td>
    <td class="SearchVM" >${data.baza[i]["CAR MAKER"]}</td>
    <td class="SearchTCM" >${data.baza[i]["Turbocharger Manufacturer"]}</td>`;
    
    loadData.appendChild(tr);
}

console.log(data.baza[0]["RE-TURBO PN"])

//selection handling
var filterSelection = 0;
function changeSelection(e){
    const selectionBtn = document.getElementById("selectionButton");
    if(e == 0){
        selectionBtn.innerHTML = "Turbo Number Part Search";
        filterSelection = 0;
    }
    else if(e == 1){
        selectionBtn.innerHTML = "Search by Vehicle Manufacturer";
        filterSelection = 1;
    }
    else if(e == 2){
        selectionBtn.innerHTML = "Search by Turbocharger Manufacturer";
        filterSelection = 2;
    }
    document.getElementById('searchKeyword').innerHTML = "";
}

//filter algorithm 

function filter() {
    console.log("sup")
    // Declare variables
    var input, filter, stpm, svm, stcm, a, i, txtValue;
    input = document.getElementById('searchKeyword');
    filter = input.value.toUpperCase();
    tbs = document.getElementsByClassName('tableRow');
    stpm = document.getElementsByClassName('SearchTPN');
    svm = document.getElementsByClassName('SearchVM');
    stcm = document.getElementsByClassName('SearchTCM');  
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < tbs.length; i++) {
        switch(filterSelection){
            case 0: a = stpm[i]; break;
            case 1: a = svm[i]; break;
            case 2: a = stcm[i]; break;
            default: svm[i];
        }
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tbs[i].style.display = "";
      } else {
        tbs[i].style.display = "none";
      }
    }
  }