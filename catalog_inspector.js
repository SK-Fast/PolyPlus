
let url = window.location.pathname.split( '/' );

if (url[2]) {

    chrome.storage.sync.get([ 'downloadasset' ], function(result) {

        if (result['downloadasset'] == false) {
            return
        }

let bodycontainer = document.querySelectorAll('.main-content')[1].querySelectorAll('.row')[0]
let ImgPreview = bodycontainer.querySelectorAll('.col-sm-5')[0]
let AssetInfo = bodycontainer.querySelectorAll('.col-sm')[0]
let TitleName = AssetInfo.getElementsByTagName('span')[0]
let Dropdowns = TitleName.getElementsByTagName('div')[0]
let aDropDownTag = Dropdowns.getElementsByTagName('a')[0]

let ItemID = url[2]

Dropdowns.innerHTML += `<a href="#" title="Download Asset" id="polyplus-downloading" class="dropdown-ellipses dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">
<i class="fe fe-loader"></i> </a>`

fetch("https://api.polytoria.com/v1/asset/info?id=" + ItemID).then(datanonjson => datanonjson.json().then(data => {
    if (data["Type"] == "Image" || data["Type"] == "Face") {
        Dropdowns.innerHTML += `<a href="#" title="Download Asset" id="polyplus-download-btn" class="dropdown-ellipses dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">
        <i class="fe fe-download"></i> </a>`

        document.getElementById("polyplus-download-btn").onclick = function() {
            const element = document.createElement('a');
            element.setAttribute('href', 'https://polytoria.com/assets/catalog/' + ItemID + ".png");
            element.setAttribute('download', ItemID.toString() + ".png");

            element.style.display = 'none';

            document.body.appendChild(element);

            element.click();
            document.body.removeChild(element);
        }

    } else if (data["Type"] == "Hat" || data["Type"] == "Tool" || data["Type"] == "Pack") {
        Dropdowns.innerHTML += `<a href="#" title="Download Asset" id="polyplus-download-btn" class="dropdown-ellipses dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">
        <i class="fe fe-download"></i>&nbsp</a>`

        Dropdowns.innerHTML += `<a href="#" title="Download Mesh Asset" id="polyplus-download-mesh-btn" class="dropdown-ellipses dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">
        <i class="fe fe-box"></i>&nbsp</a>`

        document.getElementById("polyplus-download-btn").onclick = function() {
            const element = document.createElement('a');
            element.setAttribute('href', 'https://polytoria.com/assets/catalog/' + ItemID + ".png");
            element.setAttribute('download', ItemID.toString() + ".png");

            element.style.display = 'none';

            document.body.appendChild(element);

            element.click();
            document.body.removeChild(element);
        }

        document.getElementById("polyplus-download-mesh-btn").onclick = function() {
            const element = document.createElement('a');
            element.setAttribute('href', 'https://polytoria.com/assets/catalog/' + ItemID + ".obj");
            element.setAttribute('download', ItemID.toString() + ".obj");

            element.style.display = 'none';

            document.body.appendChild(element);

            element.click();
            document.body.removeChild(element);
        }
    }

    document.getElementById("polyplus-downloading").style.display = "none"
}))

console.log(bodycontainer)
    })
}