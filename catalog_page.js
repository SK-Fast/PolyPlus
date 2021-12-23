chrome.storage.sync.get([ 'shoplimiteditemfilter' ], function(result) {

    if (result['shoplimiteditemfilter'] == false) {
        return
    }

let SortSelection = document.getElementById("sortType")
let CatalogContainer = document.getElementById("catalog_container")
let HeaderCatalog = document.getElementsByClassName("header-body")[0]

SortSelection.innerHTML += '<option value="POLYPLUS_LIMITED">Limited Item</option>'
SortSelection.innerHTML += '<option value="POLYPLUS_NONLIMITED">Not Limited Item</option>'

let FilterMenu = `<div class="row align-items-center">
<div class="col-sm-2">
  <h6 class="header-pretitle" style="
visibility: hidden;
">
    Polytoria
  </h6>
  <h1 class="header-title" style="
visibility: hidden;
">
    Catalog
  </h1>

</div>
<div class="col-sm">
  <div class="row" style="height: 119px;margin-bottom:-30px;position: relative;top: 17px;">
    <div class="col-sm-6">
<label>Any price: </label>
      <input type="radio" name="POLYPLUS_PRICEFILTER" id="POLYPLUS_PRICEFILTER_ANYPRICE"><br>
<label>Custom: </label>
      <input type="radio" name="POLYPLUS_PRICEFILTER" id="POLYPLUS_PRICEFILTER_CUSTOM">
      <span>
      <input type="number" value="0" class="" id="POLYPLUS_PRICEFILTER_CUSTOMMIN" placeholder="Min" style="
width: 50px;
">
<input type="number" value="0" class="" id="POLYPLUS_PRICEFILTER_CUSTOMMAX" placeholder="Max" style="
width: 50px;
">
      </span>
      <br>
<label>Free: </label>
<input type="radio" name="POLYPLUS_PRICEFILTER" id="POLYPLUS_PRICEFILTER_FREE">
    </div>
      
    <div class="col-sm-2" style="
width: 292px !important;
max-width: 200px !important;
">
      <input type="text" class="form-control form-control-rounded" id="POLYPLUS_PRICEFILTER_SEARCHBYCREATOR" placeholder="Search by Creator name..." style="
width: 264px;
">
    </div>
    
    
  </div>
</div>
</div>`

/*
HeaderCatalog.innerHTML += FilterMenu

let PriceFilterFree = document.getElementById("POLYPLUS_PRICEFILTER_FREE")
let PriceFilterCustom = document.getElementById("POLYPLUS_PRICEFILTER_CUSTOM")
let PriceFilterAny = document.getElementById("POLYPLUS_PRICEFILTER_ANYPRICE")
let SearchByCreator = document.getElementById("POLYPLUS_PRICEFILTER_SEARCHBYCREATOR")

SearchByCreator.style.display = "none"

PriceFilterAny.click()
*/

function Update() {
    let strType = SortSelection.options[SortSelection.selectedIndex].text;

    /*

    let TargettedCreator = SearchByCreator.value

    if (TargettedCreator !== "") {
        let all = CatalogContainer.querySelectorAll("div")

        all.forEach(function(item) {
            let thecard = item.getElementsByTagName("div")
            if (thecard[1]) {

                thecard = item.getElementsByTagName("div")[1]

                let creatoratag = thecard.getElementsByTagName("a")

                if (creatoratag[1]) {
                    creatoratag = thecard.getElementsByTagName("a")[1]
                    let CreatorNameInCard = creatoratag.textContent
                    if (CreatorNameInCard !== " " + TargettedCreator) {
                        item.style.display = "none"
                    } else {
                        item.style.display = ""
                    }
                }

                
            }
        })
    }

    */
    

    if (strType == "Limited Item") {
        let all = CatalogContainer.querySelectorAll("div")

        all.forEach(function(item) {
            let thecard = item.getElementsByClassName("card")[0]
            if (thecard) {

                let ribbon = thecard.getElementsByClassName("ribbon")
                if (!ribbon[0]) {
                    item.style.display = "none"
                }
                
            }
        })
    }

    if (strType == "Not Limited Item") {
        let all = CatalogContainer.querySelectorAll("div")

        all.forEach(function(item) {
            let thecard = item.getElementsByClassName("card")[0]
            if (thecard) {

                let ribbon = thecard.getElementsByClassName("ribbon")
                if (ribbon[0]) {
                    item.style.display = "none"
                }
                
            }
        })
    }
}

setInterval(Update,100);
})