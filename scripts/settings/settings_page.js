let url_string = window.location.href
let url = new URL(url_string);
let polyplus_type = url.searchParams.get("polyplus_type");

if (polyplus_type) {
    if (polyplus_type == "description") {
        let DescriptionTextbox = document.getElementsByName("description")[1]
        DescriptionTextbox.focus()

        DescriptionTextbox.scrollIntoView()
        window.scrollBy(0,-80)

        window.history.replaceState({}, document.title, "/my/settings");

    }
}

let headertabs = document.getElementsByClassName("header-tabs")[0]

let PolyPlusBtnTemplate = `<a class="nav-link" target="_none" href="https://polytoria.com/polyplus/settings/">&nbsp;&nbsp;PolyPlus</a>`
headertabs.innerHTML += PolyPlusBtnTemplate