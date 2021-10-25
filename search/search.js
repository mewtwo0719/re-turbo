//populating table from json

const loadData = document.getElementById("loadData");
for(var j = 0; j < 1; j++){
for(var i = 0; i < data.baza.length; i++){
    let tr = document.createElement("tr");
    tr.classList.add('tableRow')
    tr.innerHTML = `
    <th scope="row">${i}</th>

    <td class="" >${data.baza[i]["RT-PN"] || ""}</td>
    <td class="" >${data.baza[i]["Turb. Ch. PN"] || ""}</td>
    <td class="" >${data.baza[i]["Veh.Type"] || ""}</td>
    <td class="" >${data.baza[i]["ENG. SIZE"] || ""}</td>
    <td class="" >${data.baza[i]["KW"] || ""}</td>
    <td class="" >${data.baza[i]["SOP /EOP"] || ""}</td>
    <td class="" >
    <input type="checkbox" id="checkbox${i}" onchange="questionMarked(${i})"/>
    <label class="checkboxLabel" for="checkbox${i}"><span>?</span><span>X</span>
    </td>


    <td style='display:none;' class="searchProductGroup" >${data.baza[i]["PRODUCT GROUP"]}</td>
    <td style='display:none;' class="searchBrand" >${data.baza[i]["Brand"]}</td>
    <td style='display:none;' class="searchTurbochargerPN" >${data.baza[i]["Turbocharger PN"]}</td>
    <td style='display:none;' class="searchCarMaker" >${data.baza[i]["CAR MAKER"]}</td>

    `;
    
    
    loadData.appendChild(tr);
}}

//populating datalists

var datalist = {
  datalistProductGroup:[
    "group1", "group2", "group3"
  ],
  datalistBrand:[
    "brand1", "brand2", "garret"
  ],
  datalistTurbochargerPN:[
    "charger1", "charger2", "turbo123"
  ],
  datalistCarMaker:[
    "audi", "bmw", "vw", "volvo"
  ]
}

var datalistProductGroupDOM = document.getElementById("datalistProductGroup")
for(var i = 0; i < datalist.datalistProductGroup.length; i++){
    let option = document.createElement("option");
    option.value = datalist.datalistProductGroup[i];
    datalistProductGroupDOM.appendChild(option);
}


var datalistBrandDOM = document.getElementById("datalistBrand")
for(var i = 0; i < datalist.datalistBrand.length; i++){
    let option = document.createElement("option");
    option.value = datalist.datalistBrand[i];
    datalistBrand.appendChild(option);
}

var datalistTurbochargerPNDOM = document.getElementById("datalistTurbochargerPN")
for(var i = 0; i < datalist.datalistTurbochargerPN.length; i++){
    let option = document.createElement("option");
    option.value = datalist.datalistTurbochargerPN[i];
    datalistTurbochargerPN.appendChild(option);
}

var datalistCarMakerDOM = document.getElementById("datalistCarMaker")
for(var i = 0; i < datalist.datalistCarMaker.length; i++){
    let option = document.createElement("option");
    option.value = datalist.datalistCarMaker[i];
    datalistCarMaker.appendChild(option);
}


//Create message
const allRows = document.getElementsByClassName("tableRow");
function questionMarked(n){
  if(allRows[n].classList.contains("activeRow")) allRows[n].classList.remove("activeRow");
  else allRows[n].classList.add("activeRow");
}


//filter algorithm 

var inputProductGroup = document.getElementById('searchKeywordProductGroup');
var inputBrand = document.getElementById('searchKeywordBrand');
var inputTurbochargerPN = document.getElementById('searchKeywordTurbochargerPN');
var inputCarMaker = document.getElementById('searchKeywordCarMaker');

function filter() {
    // Declare variables
    var keyword1, keyword2, keyword3, keyword4, txtValue1, txtValue2, txtValue3, txtValue4;

    filterCarMaker = inputCarMaker.value.toUpperCase();
    filterBrand = inputBrand.value.toUpperCase();
    filterProductGroup = inputProductGroup.value.toUpperCase();
    filterTurbochargerPN = inputTurbochargerPN.value.toUpperCase();
    /////////ostali fileri

    tbs = document.getElementsByClassName('tableRow');

    var searchProductGroup = document.getElementsByClassName('searchProductGroup');
    var searchBrand = document.getElementsByClassName('searchBrand');
    var searchTurbochargerPN = document.getElementsByClassName('searchTurbochargerPN');
    var searchCarMaker = document.getElementsByClassName('searchCarMaker'); 

  
    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < tbs.length; i++) {
     keyword1 = searchTurbochargerPN[i];
     keyword2 = searchCarMaker[i];
     keyword3 = searchBrand[i];
     keyword4 =  searchProductGroup[i];
      
      txtValue1 = keyword1.textContent || keyword1.innerText;
      txtValue2 = keyword2.textContent || keyword2.innerText;
      txtValue3 = keyword3.textContent || keyword3.innerText;
      txtValue4 = keyword4.textContent || keyword4.innerText;

      console.log(txtValue1)

      if ((txtValue1.toUpperCase().indexOf(filterTurbochargerPN) > -1) && 
      (txtValue2.toUpperCase().indexOf(filterCarMaker) > -1) &&
      (txtValue3.toUpperCase().indexOf(filterBrand) > -1) &&
      (txtValue4.toUpperCase().indexOf(filterProductGroup) > -1)){
        tbs[i].style.display = "";
      } else {
        tbs[i].style.display = "none";
      }
    }
  }