let colsm8 = document.getElementsByClassName("col-sm-8")[0]

colsm8.innerHTML = "<h3>Feed</h3>" + colsm8.innerHTML


fetch("https://raw.githubusercontent.com/SK-Fast/polyplus-other-stuff/main/announcement.json").then(datanonjson => {console.log(datanonjson);datanonjson.json().then(data => {
    if (datanonjson.status !== 200) {
        return
    }

    if (data["HasAnnouncement"] == true) {
        console.log(data["News"])
        data["News"].forEach(function(item) {
            let AnnTemplate = `<div class="card" style="
        background: rgba(56,255,255,0%);
        border-color: rgba(56,255,255,0%);
        "><center>
        <a target="_none" href="${item["Link"]}">
        <img style="width:80%" title="${item["Title"]}" src="${item["Img"]}"></a></center>
        </div>`


        
        colsm8.innerHTML = AnnTemplate + colsm8.innerHTML
        })
    }
})})
