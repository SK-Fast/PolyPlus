chrome.storage.sync.get([ 'newsfetching' ], function(result) {

    if (result['newsfetching'] == false) {
        return
    }

let colsm8 = document.getElementsByClassName("col-sm-8")[0]

colsm8.innerHTML = "<h3>Feed</h3>" + colsm8.innerHTML

colsm8.innerHTML += `<style>
.polyplus_card_feed img {
    width:40%;
    transition: 0.5s cubic-bezier(0.22, 1, 0.36, 1);
    -moz-user-select: none;
-webkit-user-select: none;
user-select: none;
pointer-events: none;

}\n

.polyplus_card_feed:hover img {
    width:100%
}\n

.polyplus_card_feed:active img {
    width:80%

}\n
</style>`


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
        ">
        <a target="_none" class="polyplus_card_feed" href="${item["Link"]}">
        <img title="${item["Title"]}" src="${item["Img"]}"></a>
        </div>`


        
        colsm8.innerHTML = AnnTemplate + colsm8.innerHTML
        })
    }
})})
})