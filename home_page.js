

fetch("https://raw.githubusercontent.com/SK-Fast/polyplus-other-stuff/main/announcement.json").then(datanonjson => datanonjson.json().then(data => {
    if (datanonjson.status !== 200) {
        return
    }

    if (data["HasAnnouncement"] == true) {
        let AnnTemplate = `<div class="card" style="
        background: rgba(56,255,255,0%);
        border-color: rgba(56,255,255,0%);
        ">
        <a target="_none" href="${data["Link"]}">
        <img title="${data["Title"]}" src="${data["Img"]}"></a>
        </div>`

        let colsm8 = document.getElementsByClassName("col-sm-8")[0]

        colsm8.innerHTML = AnnTemplate + colsm8.innerHTML
    }
}))