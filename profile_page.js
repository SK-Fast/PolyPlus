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