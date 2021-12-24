chrome.storage.sync.get([ 'directdescriptionedit', 'avatarinspect' ], function(result) {


let url = window.location.pathname.split( '/' );
let UserId = url[2]

/*
function GetLoggedInUser() {
    let TopBar = document.getElementById("topbar")
    let ContainerFluid = TopBar.getElementsByClassName("container-fluid")[0]
    let NavUser = ContainerFluid.getElementsByClassName("navbar-user")[0]
    let DropdownUser = NavUser.getElementsByClassName("dropdown")[0]
    let UserPfp = NavUser.getElementsByClassName("dropdown")[0]
    
}
*/

let theinter;
let triedfor = 0

let AddFriendBtn = document.getElementById("btn-addfriend")

let UserTabBtn = document.getElementById("tab_user_btn")
let TabUserContent = document.getElementById("tab_user")
let TopBtnGroupUL = UserTabBtn.parentElement.parentElement
let Toppest = TopBtnGroupUL.parentElement

if (result['avatarinspect'] !== false) {

let AvatarProcess = `<h3>Avatar</h3><div class="card" id="polyplus_avatar_inspect" style="padding: 15px;display: flex;flex-wrap: wrap;flex-direction: row;
">
</div>`

TabUserContent.innerHTML = AvatarProcess + TabUserContent.innerHTML

let polyplus_avatar_inspect = document.getElementById("polyplus_avatar_inspect")

let SelfUserID = 0

let febriefcase = document.getElementsByClassName("fe-briefcase")[0].parentElement
let url2 = febriefcase.href.split( '/' );
SelfUserID = url2[4]

let OriginData
let CatalogItems = []

async function FetchDatas(data) {
    OriginData = data

    let Wearables = data["Wearables"]
    let Hats = Wearables["Hats"]
    let BodyColors = data["BodyColors"]

    let DataTypes = [
        "Tool",
        "Face",
        "Shirt",
        "Pants",
        "TShirt",
        "Head"
    ]

    let bodycolordata = `
        <svg width="150" style="display: block;
        margin: auto;" height="150" viewBox="0 0 165.846 235.58" xmlns="http://www.w3.org/2000/svg">
    <defs>
    </defs>
    <rect x="55.527" y="8.592" width="54.791" height="54.791" style="fill: ${BodyColors["Head"]};" rx="12.656" ry="12.656" id="polyplus_bodypart_head"></rect>
    <rect x="41.495" y="67.074" width="82.853" height="88.259" style="fill: ${BodyColors["Torso"]};" rx="10.275" ry="10.275" id="polyplus_bodypart_torso"></rect>
    <rect x="128.688" y="67.074" width="37.158" height="88.259" style="fill: ${BodyColors["RightArm"]};" rx="8.599" ry="8.599" id="polyplus_bodypart_rightam"></rect>
    <rect x="86.107" y="159.421" width="37.158" height="76.159" style="fill: ${BodyColors["RightLeg"]};" rx="8.599" ry="8.599" id="polyplus_bodypart_rightleg"></rect>
    <rect x="43.665" y="159.421" width="37.158" height="76.159" style="fill: ${BodyColors["LeftLeg"]};" rx="8.599" ry="8.599" id="polyplus_bodypart_leftleg"></rect>
    <rect y="67.074" width="37.158" height="88.259" style="fill: ${BodyColors["LeftArm"]};" rx="8.599" ry="8.599" id="polyplus_bodypart_leftarm"></rect>
    </svg>
    `

    let HatUsing = `<div class="card" id="polyplus_avatar_inspect_hats" style="
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: center;
    
    ">
    <img src="https://polytoria.com/assets/img/avatarloader.gif" id="polyplus_loading" width="200" height="200">
    </div><div class="card" id="polyplus_total_balance" style="
    padding: 15px;
    display: flex;
    height: 100%;
    width: 100%;
    
    ">
    </div>`

    polyplus_avatar_inspect.innerHTML += bodycolordata

    polyplus_avatar_inspect.innerHTML += HatUsing
            
    
    let polyplus_avatar_inspect_hats = document.getElementById("polyplus_avatar_inspect_hats")
    let polyplus_total_balance = document.getElementById("polyplus_total_balance")

    DataTypes.forEach(async function(item) {

        await fetch("https://api.polytoria.com/v1/asset/info?id=" + Wearables[item]).then(datanonjson2 => datanonjson2.json().then(data2 => {
            if (datanonjson2.status == 200) {
                CatalogItems.push(data2)

            }
        }))
    })

    for (let i2 = 0; i2 < Hats.length; i2++) {
        await fetch("https://api.polytoria.com/v1/asset/info?id=" + Hats[i2]).then(datanonjson2 => datanonjson2.json().then(data2 => {
            if (datanonjson2.status == 200) {
                CatalogItems.push(data2)
            }
        }))
    }

    let TotalBricks = 0
    let TotalStuds = 0

    CatalogItems.forEach(function(item) {
        let Template = `
        <div class="col-4 col-sm-2"><a target="_none" href="https://polytoria.com/shop/${item["ID"]}"><div class="card" style="padding: 5px;">
                <img src="${item["Thumbnail"]}" style="width: 100%"><br>
                <center><span style="font-size: 12px;">${item["Name"]}</span><button class="btn btn-primary btn-sm btn-block">View</button></center>
                </div></a></div>`

                if (item["Price"] !== -1) {
                    if (item["Currency"] == "Studs") {
                        TotalStuds += item["Price"]
                    } else {
                        TotalBricks += item["Price"]

                    }

                }
            
                polyplus_avatar_inspect_hats.innerHTML += Template
    })

    let Template = `<h4>Total balance: <img width="22" height="22" src="/assets/img/icons/stud.png"> ${TotalStuds} , <img width="22" height="22" src="/assets/img/icons/brick.png">  ${TotalBricks} .</h4>`

    polyplus_total_balance.innerHTML += Template

    
    document.getElementById("polyplus_loading").parentElement.removeChild(document.getElementById("polyplus_loading"))

}

fetch("https://api.polytoria.com/v1/users/getappearance?id=" + UserId).then(datanonjson => datanonjson.json().then(data => FetchDatas(data)))
}

if (result['directdescriptionedit'] !== false) {

theinter = setInterval(() => {

    let MainContent = document.getElementsByClassName("col-sm-4")[0]
    let BtnGroup = MainContent.getElementsByClassName("btn-group")[0]
    let AboutUser = MainContent.getElementsByTagName("h3")[0]

    if (AddFriendBtn.getAttribute("disabled") == "disabled" && AddFriendBtn.textContent !== "Pending") {
        AboutUser.innerHTML += ' <a target="_none" href="https://polytoria.com/my/settings?polyplus_type=description" class="fe fe-edit"></a>'
        clearInterval(theinter)
    }
    triedfor = triedfor + 1
    if (triedfor >= 30) {
        clearInterval(theinter)

    }
    
    
}, 200);
}
})