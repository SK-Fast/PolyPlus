let url = window.location.pathname.split( '/' );

let LikeCount = 0
let DisLikeCount = 0
let GameID = 0

let playbtn = document.getElementById("playButton")
let LaunchFunction = playbtn.getAttribute('onclick')
GameID = LaunchFunction.replace("launchClient","").replace("(","").replace(")","")

fetch("https://api.polytoria.com/v1/games/info?id=" + GameID).then(datanonjson => {
    datanonjson.json().then(data => {

        console.log(GameID)
        console.log("https://api.polytoria.com/v1/games/info?id=" + GameID)
        console.log(data)

        LikeCount = data["Likes"]
        DisLikeCount = data["Dislikes"]

        let LikeCountForward = LikeCount + 1
        let DisLikeCountForward = DisLikeCount + 1

        let like = document.querySelectorAll('a[onclick="Like()"]');

        like.forEach(function(item) {
         
            let h3tag = item.getElementsByTagName("h3")[0]
        
            h3tag.innerHTML = '<i class="fe fe-thumbs-up"></i> ' + LikeCount
            
        });

        let dislike = document.querySelectorAll('a[onclick="Dislike()"]');

        dislike.forEach(function(item) {

            let h3tag = item.getElementsByTagName("h3")[0]
        
            h3tag.innerHTML = '<i class="fe fe-thumbs-down"></i> ' + DisLikeCount


        });
        
    })
})