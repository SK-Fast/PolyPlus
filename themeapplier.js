if (window.location.href == "https://polytoria.com/polyplus/settings/") {

} else {
    let themedata = [
        "topbarcolor",
        "bgcolor",
        "bgimg_data",
        "usetheme",
        "navbarcolor",
        "primarybgcolor"
    ]
            
    chrome.storage.sync.get(themedata, function(result) {

    
        if (result["usetheme"] == false) {
            return
        }
    
        let processcss = `
        .navbar {
            background-color: ${result["topbarcolor"]} !important;
        }

        .navbar-vertical {
            background-color: ${result["navbarcolor"]} !important;
        }

        body {
            background-color: ${result["bgcolor"]} !important;
            background-image: url("${result["bgimg_data"]}") !important;
            background-repeat: ${result["bgtype"]} !important;
            background-size: cover !important;
            background-attachment: ${result["bgattachtype"]} !important;
        }

        .btn-primary {
            background-color: ${result["primarybgcolor"]} !important;
            border-width: 0px !important;
        }
        `

        var type = 'text/css';
        var file = new Blob([processcss], {
                   type: type
                  });

        
    const objectURL = window.URL.createObjectURL(file)

    console.log(objectURL)

        document.head.innerHTML += `<link id="polyplus_css_link" href="${objectURL}" rel="stylesheet" type="text/css">`
    })
}