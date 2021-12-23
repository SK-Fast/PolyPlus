chrome.storage.sync.get([ 'creationlinkembedding' ], function(result) {

    if (result['creationlinkembedding'] == false) {
        return
    }
    let Table = document.getElementsByClassName("table")[0]
    let TableBody = Table.getElementsByTagName("tbody")[0]
    let AllStuff = TableBody.querySelectorAll("tr")
    
    AllStuff.forEach(function(item) {
        let ItemTitle = item.getElementsByTagName("td")[1]
        let Morebutton = item.getElementsByTagName("td")[5]
        let DropdownClass = Morebutton.getElementsByClassName("dropdown-menu")[0]
        let DropdownEditButton = DropdownClass.getElementsByTagName("a")[1]
    
        let PriceInfo = item.getElementsByTagName("td")[3]
        let Price = PriceInfo.textContent

        if (Price == " -1") {
            PriceInfo.textContent = "Off-sale"
        }

        if (Price == " 0") {
            PriceInfo.textContent = "Free"
        }

        let Oldtitle = ItemTitle.innerHTML
        
        let url_string = DropdownEditButton.href
        let url = new URL(url_string);
        let LocatedID = url.searchParams.get("id");
        
        ItemTitle.innerHTML = `<a href="https://polytoria.com/shop/${LocatedID}" target="_none" class="text-reset">${Oldtitle}</a>`
    
    
        //item.innerHTML = "Test"
    })

})