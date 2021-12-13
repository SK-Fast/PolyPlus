let ButtonGroup = document.getElementsByClassName("mb-0")[0]

ButtonGroup.innerHTML += `<div class="col-auto">
<button class="btn btn-secondary" id="polyplus_randomgame">Random game</button>
</div>`

if (!String.prototype.includes) {
    String.prototype.includes = function() {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

let polyplus_randomgame = document.getElementById("polyplus_randomgame")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function UpdateStep() {
    let GameContainer = document.getElementById("games_container")
    let AllCards = GameContainer.querySelectorAll("div")

    Array.from(AllCards).forEach(function(item) {

        let cardtag = item.getElementsByClassName("card")[0]
        if (cardtag) {
            let cardbody = cardtag.getElementsByClassName("card-body")[0]
            if (cardbody) {
                let spantag = cardbody.getElementsByClassName("text-secondary")[0]
                if (spantag) {
                    let atag = item.getElementsByTagName("a")[0]

                    if (atag) {

                        let url = atag.href.split( '/' );
                        let targettingid = url[4]

                        if (!atag.getAttribute("polyplus_loadsuccess")) {
                            atag.setAttribute("polyplus_loadsuccess","polyplus_loadsuccess")
                        fetch("https://api.polytoria.com/v1/games/info?id=" + targettingid.toString()).then(datanonjson => datanonjson.json().then(data => {
                            let percentcal = Math.round(data["Likes"] / (data["Likes"] + data["Dislikes"]) * 100)
                            if (isNaN(percentcal)) {
                                spantag.innerHTML += `  <i class="fe fe-thumbs-up"></i>  --`
                            } else {
                                spantag.innerHTML += `  <i class="fe fe-thumbs-up"></i>  ${percentcal}%`

                            }
                        }))
                    }

                    }
                }
            }
        }
    })
}

setInterval(UpdateStep, 100);

function Ran() {

    let TriedToget = 0
    function DidAlittlerandomgame() {
    TriedToget = TriedToget + 1
    let RandomizedGameId = getRandomInt(1500) + 1
    polyplus_randomgame.innerHTML = '<i class="fe fe-loader"></i> Randomizing..'   
    polyplus_randomgame.setAttribute("disabled","disabled") 

    

    fetch('https://polytoria.com/assets/thumbnails/games/' + RandomizedGameId.toString() + '.png').then(data2 => {
                if (data2.status == 404) {
                    DidAlittlerandomgame()
                    return
                }

        fetch('https://api.polytoria.com/v1/games/info?id=' + RandomizedGameId.toString()).then(datanonjson => {datanonjson.json().then(data => {
        
        if (TriedToget >= 30) {

            polyplus_randomgame.innerHTML = '<i class="fe fe-x"></i> Failed.'    
            polyplus_randomgame.removeAttribute("disabled")

            alert("Failed, Please try again.")

                return
            }   
        
        
            if (data.status == 404 || typeof(data) == "undefined") {
                DidAlittlerandomgame()
                return
                }
                
                
                if (data["Active"] == false) {
                DidAlittlerandomgame()
                return
                }

                    window.location.href = "https://polytoria.com/games/" + data["ID"].toString()
                })})   
    })
                        
    
    
}

DidAlittlerandomgame()
}

polyplus_randomgame.onclick = Ran