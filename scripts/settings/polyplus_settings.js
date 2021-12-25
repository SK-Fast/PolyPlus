let OriginHTML = `
<!DOCTYPE HTML>
<html>
    <head>
        <title>PolyPlus Settings</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">

        <style>
            body {
                border: solid rgba(255, 84, 84, 0);
                border-top-width: 5px;
                border-top-color: rgb(255,84,84);

                background-color: rgb(34, 34, 34);
                margin: 0;
                padding: 0;

                font-family: 'Comfortaa', cursive;

                animation-name: in1;
                animation-duration: 1s;
            }

            @keyframes in1 {
                from {
                    opacity: 0;
                    border-top-width: 0px;
                }
                to {
                    opacity: 1;
                    border-top-width: 5px;
                }
            }

            .main-content {
                color: white;
                width: 50%;
                margin-left: auto;
                margin-right: auto;
            }

            .text-center {
                text-align: center;
            }

            .sub-text-top {
                color: rgb(165, 165, 165);
                letter-spacing: 5px;
                margin-left: auto;
                margin-right: auto;
                text-align: center;

            }

            input[type="checkbox"] {
                width: 20px;
                height: 20px;

                margin-left: 100%;
                margin-top: 0px;

                position: relative;

                right: 20px;
                top: -16px;

            }


            input {

                margin-left: 100%;
                margin-top: 0px;

                position: relative;

                right: 20px;
                top: -16px;

            }

            .container {  
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                flex-direction: column;
                align-items: left;
                padding: 5px 5px;
            }

            #update_settings {
                padding: 10px 10px;
                border-radius: 10px;
                border-width: 0px;
                background-color: rgb(0, 140, 255);
                font-family: 'Comfortaa', cursive;
                color: white;
                transition: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                cursor:pointer;
            }

            #update_settings:hover {
                box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.226);
                letter-spacing: 4px;
            }

            #update_settings:active {
                box-shadow: inset 0 0 100px 100px rgba(143, 143, 143, 0.226);
                letter-spacing: 4px;
            }

            details {
                transition: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

            }

            details:hover {
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <br>
        <br>
        <div class="main-content">
            <p class="text-center sub-text-top"><b>POLYPLUS</b></p>

            <h1 class="text-center">Poly+ Settings</h1>

            <h4>Site feature settings</h4>

            <div class="container">
                <div>
                    <label>Show Chat </label>
                    <input id="showchat" type="checkbox">
                </div>
            </div>

            <h4>Poly+ feature settings</h4>

            <div class="container">
                <div>
                    <label>News fetching enabled </label>
                    <input id="newsfetching" type="checkbox">
                </div>

                <div>
                    <label>Avatar Inspecting </label>
                    <input id="avatarinspect" type="checkbox">
                </div>

                <div>
                    <label>Main page like dislike ratio </label>
                    <input id="mainpage_likedislike" type="checkbox">
                </div>

                <div>
                    <label>Like dislike count </label>
                    <input id="likecount" type="checkbox">
                </div>

                <div>
                    <label>Form link embedding </label>
                    <input id="formlinkembedding" type="checkbox">
                </div>

                <div>
                    <label>Creation page link embedding </label>
                    <input id="creationlinkembedding" type="checkbox">
                </div>

                <div>
                    <label>Shop limited item filter </label>
                    <input id="shoplimiteditemfilter" type="checkbox">
                </div>

                <div>
                    <label>Directly description editing </label>
                    <input id="directdescriptionedit" type="checkbox">
                </div>

                <div>
                    <label>Download original asset </label>
                    <input id="downloadasset" type="checkbox">
                </div>

                <div>
                    <label>Random game button </label>
                    <input id="randomgamebtn" type="checkbox">
                </div>

                <div>
                    <label>Guild Preview </label>
                    <input id="guildpreview" type="checkbox">
                </div>

                    <h4>Theme</h4>
                    <label>Use theme? </label>

                    <input id="usetheme" type="checkbox">

                    <svg style="display: block;margin: auto;" height="200" viewBox="0 0 470.256 339.905" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs></defs>
                    <rect x="94.218" y="35.718" width="376.038" height="304.187" style="fill: rgb(22, 3, 22);" id="bgcolor_preview"></rect>
                    <image x="94.218" y="35.718" width="376.038" height="304.187" id="bgimg_preview" href=""></image>
                    <rect width="404.193" height="45.572" style="fill: rgb(35, 0, 51);" x="66.063" id="topbarcolor_preview"></rect>
                    <rect width="106.184" height="339.905" style="fill: rgb(36, 0, 46);" id="navbarcolor_preview"></rect>
                    <image width="84.996" height="21.249" x="9.717" y="13.681" style="" xlink:href="data:image/png;base64,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"></image>
                    <ellipse style="fill: rgb(77, 77, 77);" cx="445.214" cy="22.583" rx="12.366" ry="12.366"></ellipse>
                    <rect x="15.875" y="51.528" width="78.343" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="7.678" y="51.528" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="24.072" y="65.395" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="15.875" y="65.395" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="24.072" y="80.506" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="15.875" y="80.506" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="24.072" y="95.783" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="15.875" y="95.783" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="24.072" y="111.894" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="15.875" y="111.894" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="24.072" y="126.726" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="15.875" y="126.726" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="24.072" y="141.837" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="15.875" y="141.837" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="24.072" y="155.787" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="15.875" y="155.787" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="24.072" y="170.898" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="15.875" y="170.898" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="24.072" y="185.175" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="15.875" y="185.175" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="24.072" y="201.286" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="15.875" y="201.286" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="24.072" y="216.118" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="15.875" y="216.118" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="24.072" y="232.229" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                    <rect x="15.875" y="232.229" width="5.039" height="5.205" style="fill: rgb(70, 70, 70);" rx="3.244" ry="3.244"></rect>
                    <rect x="10.534" y="304.832" width="83.684" height="21.273" style="fill: rgb(70, 153, 255);" rx="3.728" ry="3.728" class="primarybtnpreview"></rect>
                    <rect x="134.924" y="66.746" width="119.581" height="137.372" style="fill: rgb(20, 20, 20);" rx="11.436" ry="11.436" class="cardpreview"></rect>
                    <rect x="264.333" y="66.746" width="168.515" height="63.091" style="fill: rgb(20, 20, 20);" rx="5.194" ry="5.194" class="cardpreview"></rect>
                    <g transform="matrix(1, 0, 0, 1, 0, -12)">
                      <g>
                        <rect x="264.333" y="146.027" width="168.515" height="44.353" style="fill: rgb(20, 20, 20);" rx="7.275" ry="7.275" class="cardpreview"></rect>
                        <ellipse style="fill: rgb(77, 77, 77);" cx="280.718" cy="159.696" rx="6.909" ry="6.909"></ellipse>
                        <rect x="293.613" y="156.787" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                      </g>
                      <rect x="274.547" y="174.103" width="100.102" height="5.205" style="fill: rgb(134, 134, 134);" rx="2.602" ry="2.602"></rect>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, 0, 38.053997)">
                      <g>
                        <rect x="264.333" y="146.027" width="168.515" height="44.353" style="fill: rgb(20, 20, 20);" rx="7.275" ry="7.275" class="cardpreview"></rect>
                        <ellipse style="fill: rgb(77, 77, 77);" cx="280.718" cy="159.696" rx="6.909" ry="6.909"></ellipse>
                        <rect x="293.613" y="156.787" width="92.196" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                      </g>
                      <rect x="274.547" y="174.103" width="51.35" height="5.205" style="fill: rgb(134, 134, 134);" rx="2.602" ry="2.602"></rect>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, 0, 87.9058)">
                      <g>
                        <rect x="264.333" y="146.027" width="168.515" height="44.353" style="fill: rgb(20, 20, 20);" rx="7.275" ry="7.275" class="cardpreview"></rect>
                        <ellipse style="fill: rgb(77, 77, 77);" cx="280.718" cy="159.696" rx="6.909" ry="6.909"></ellipse>
                        <rect x="293.613" y="156.787" width="29.306" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                      </g>
                      <rect x="274.547" y="174.103" width="133.414" height="5.205" style="fill: rgb(134, 134, 134);" rx="2.602" ry="2.602"></rect>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -0.000015, 139.524994)">
                      <g>
                        <rect x="264.333" y="146.027" width="168.515" height="44.353" style="fill: rgb(20, 20, 20);" rx="7.275" ry="7.275" class="cardpreview"></rect>
                        <ellipse style="fill: rgb(77, 77, 77);" cx="280.718" cy="159.696" rx="6.909" ry="6.909"></ellipse>
                        <rect x="293.613" y="156.787" width="70.146" height="5.205" style="fill: rgb(70, 70, 70);" rx="2.602" ry="2.602"></rect>
                      </g>
                      <rect x="274.547" y="174.103" width="100.102" height="5.205" style="fill: rgb(134, 134, 134);" rx="2.602" ry="2.602"></rect>
                    </g>
                    <rect x="134.924" y="212.323" width="119.581" height="48.753" style="fill: rgb(20, 20, 20);" rx="10.393" ry="10.393" class="cardpreview"></rect>
                  </svg>

                    <div>
                        <label>Topbar Color </label>
                        
                        <input id="topbarcolor" type="color">
                    </div>

                    <div>
                        <label>Navbar Color </label>
                        
                        <input id="navbarcolor" type="color">
                    </div>

                    <div>
                        <label>Background Color </label>
                        
                        <input id="bgcolor" type="color">
                    </div>
                    
                    <div>
                        <label>Primary Background Color </label>
                        
                        <input id="primarybgcolor" type="color">
                    </div>


                    <div>
                        <label>Background Image </label>
                        
                        <input placeholder="Image URL here..." id="bgimg_data" type="text" value="">
                        <br>
                    </div>


                    <div>
                        <label>Background Image type </label>
                        
                        <select id="bgtype">
                        <option>no-repeat</option>
                        <option>repeat</option>
                        <option>repeat-x</option>
                        <option>repeat-y</option>
                        <option>space</option>
                        <option>round</option>
                        </select>
                        <br>
                    </div>
                    <br>
                    <div>
                        <label>Background attachment type </label>
                        
                        <select id="bgattachtype">
                        <option>fixed</option>
                        <option>scroll</option>
                        </select>
                        <br>
                    </div>



                <br>

                <button id="update_settings">Update Settings</button>
            </div>
        </div>
    </body>
</html>
`

document.write(OriginHTML)

let updatebtn = document.getElementById("update_settings")
let topbarcolor = document.getElementById("topbarcolor")
let navbarcolor = document.getElementById("navbarcolor")
let bgcolor = document.getElementById("bgcolor")
let usethemeid = document.getElementById("usetheme")

let topbarcolor_preview = document.getElementById("topbarcolor_preview")
let navbarcolor_preview = document.getElementById("navbarcolor_preview")
let bgcolor_preview = document.getElementById("bgcolor_preview")

let bgimg_img_preview = document.getElementById("bgimg_img_preview")

let bgimg_status = document.getElementById("bgimg_status")

let primarybgcolor = document.getElementById("primarybgcolor")

let primarybtnpreview = document.querySelectorAll(".primarybtnpreview")

let isUpdating = false
let allsettings = [
    "newsfetching",
    "avatarinspect",
    "mainpage_likedislike",
    "likecount",
    "formlinkembedding",
    "creationlinkembedding",
    "shoplimiteditemfilter",
    "directdescriptionedit",
    "topbarcolor",
    "bgcolor",
    "bgimg_data",
    "usetheme",
    "navbarcolor",
    "bgtype",
    "bgattachtype",
    "primarybgcolor",
    "downloadasset",
    "randomgamebtn",
    "guildpreview",
    "showchat"
]

allsettings.forEach(function(item) {
    let checkbox = document.getElementById(item)
    if (checkbox.getAttribute("type") == "checkbox" && item !== "usetheme") {
        checkbox.checked = true
    }
})

function UpdatePreview() {
    topbarcolor_preview.style.fill = topbarcolor.value
    navbarcolor_preview.style.fill = navbarcolor.value
    bgcolor_preview.style.fill = bgcolor.value

    Array.from(primarybtnpreview).forEach(function(item) {
        item.style.fill = primarybgcolor.value
    })
}

function selectItemByValue(elmnt, value){

    for(var i=0; i < elmnt.options.length; i++)
    {
      if(elmnt.options[i].value === value) {
        elmnt.selectedIndex = i;
        break;
      }
    }
  }

topbarcolor.addEventListener('change', UpdatePreview, false);
navbarcolor.addEventListener('change', UpdatePreview, false);
bgcolor.addEventListener('change', UpdatePreview, false);
primarybgcolor.addEventListener('change', UpdatePreview, false);

chrome.storage.sync.get(allsettings, function(result) {

    for (const [key, value] of Object.entries(result)) {
        let checkbox = document.getElementById(key)
        if (checkbox.getAttribute("type") == "checkbox") {
            checkbox.checked = value
        }

        if (checkbox.getAttribute("type") == "color") {
            checkbox.value = value
        }

        if (checkbox.getAttribute("type") == "text") {
            checkbox.value = value
        }

        if (checkbox.tagName == "SELECT") {
            selectItemByValue(checkbox, value)
        }
    }

    UpdatePreview()

});

updatebtn.addEventListener('click',function() {
    if (isUpdating == false) {
        isUpdating = true

        let resultdata = {}

        allsettings.forEach(function(item) {
            let checkbox = document.getElementById(item)

            if (checkbox.getAttribute("type") == "checkbox") {
                resultdata[item] = checkbox.checked
            }

            if (checkbox.getAttribute("type") == "text") {
                resultdata[item] = checkbox.value
            }

            if (checkbox.getAttribute("type") == "color" || checkbox.getAttribute("type") == "hidden" ) {
                resultdata[item] = checkbox.value
            }

            if (checkbox.tagName == "SELECT") {
                resultdata[item] = checkbox.options[checkbox.selectedIndex].text
            }
        })

        chrome.storage.sync.set(resultdata,function() {
            var error = chrome.runtime.lastError;  
            if (error) {  
                alert("Chrome storage error: " + error.message);  
                isUpdating = false
                return
            }
            alert("Saved!")
            window.location.reload()
        })
    }
})