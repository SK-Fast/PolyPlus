if (window.location.href == "https://polytoria.com/polyplus/settings/") {

} else {
    let themedata = [
        "topbarcolor",
        "bgcolor",
        "bgimg_data",
        "usetheme",
        "navbarcolor",
        "primarybgcolor",
        "showchat"
    ]
            
    chrome.storage.sync.get(themedata, function(result) {

    
        let processcss = ``

        if (result["usetheme"] == false) {
        } else {
            processcss = `
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
    
            .btn-primary, .alert-primary {
                background-color: ${result["primarybgcolor"]} !important;
                border-width: 0px !important;
            }
    
            `
        }

        if (result["showchat"] == false) {
            processcss += `
            #poly-chat-toggler, #poly-chat-container {
                display: none !important;
            }
            `
        }

        var type = 'text/css';
        var file = new Blob([processcss], {
                   type: type
                  });

        
    const objectURL = window.URL.createObjectURL(file)

        document.head.innerHTML += `<link id="polyplus_css_link" href="${objectURL}" rel="stylesheet" type="text/css">`
    })
}