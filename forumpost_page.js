let url = window.location.pathname.split( '/' );
let forumpostid = url[3]

let ForumPostThe = document.getElementById("forum-post-" + forumpostid.toString())
let td1 = ForumPostThe.getElementsByTagName("td")[1]
let rowclass = td1.getElementsByClassName("row")[0]
let colclass = rowclass.getElementsByClassName("col")[0]
let ForumContent = rowclass.getElementsByTagName("p")[1]

function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return '<a target="_none" href="' + url.replace("<br>","") + '">' + url.replace("<br>","") + ' <span class="fe fe-external-link"></span></a><br>';
    })
}



function imageify(text) {
    var urlRegex = /(https?:\/\/[^\s]+).(jpeg|jpg|gif|png)$/;
    return text.replace(urlRegex, function(url) {
      return `<a href="${url.replace("<br>","")}" target="_blank">${url.replace("<br>","")}</a> <span class="fe fe-external-link"></span></a><br><a href="${url.replace("<br>","")}" target="_blank"><img style="display: block;
      max-width:230px;
      max-height:230px;
      width: auto;
      height: auto;" src="${url.replace("<br>","")}" alt="Image"><br></a>`;
    })
}

function checkURLIsIMG(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}
  
//ForumContent.innerHTML = urlify(ForumContent.innerHTML)

let AllTexts = document.querySelectorAll("p")


Array.from(AllTexts).forEach(function (item) {
    item.innerHTML = item.innerHTML.replaceAll('&quot;','');
   
    if (checkURLIsIMG(item.innerHTML)) {
        item.innerHTML = imageify(item.innerHTML)

    } else {
        item.innerHTML = urlify(item.innerHTML)

    }
});

let AllTexts2 = document.querySelectorAll("quote")

Array.from(AllTexts2).forEach(function (item) {
    item.innerHTML = item.innerHTML.replaceAll('&quot;','');

    if (checkURLIsIMG(item.innerHTML)) {
        item.innerHTML = imageify(item.innerHTML)

    } else {
        item.innerHTML = urlify(item.innerHTML)

    }

});