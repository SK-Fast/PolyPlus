chrome.storage.sync.get([ 'guildpreview' ], function(result) {

  if (result['guildpreview'] == false) {
      return
  }

let guildpreviewer = `
<br>
<br><label class="mb-1">
                  Guild Preview
                </label><small class="form-text text-muted">This is preview of your guild. Make sure to make your guild looks good!</small>

<div class="card">
<div class="card-body">
<div class="row">
  <div class="col-sm-2">
    <a href="#/"><img src="https://polytoria.com/assets/img/pending.png" style="border-radius: 50%;height: 90px;width: 90px;" class="" id="polyplus_guildpreview_guildicon"></a>
  </div>
  <div class="col-sm-9">
    <h4 class="mb-1">
      <a href="#/" id="polyplus_guildpreview_guildname">Poly+ Guild Preview</a>
    </h4>
    <div id="polyplus_guildpreview_guilddescription">This is preview of your guild. Try change some settings above to see what happened!</div>
    <div style="height: 20px;"></div>
    <div class="text-muted"> <i class="fe fe-users"></i> 1</div>
  </div>
</div>
  <div class="col-auto">
    <div class="dropdown">
      
      <div class="dropdown-menu dropdown-menu-right">
        <a href="/report/guild/29" class="dropdown-item text-danger">
        Report
        </a>
      </div>
    </div>
  </div>
</div>
</div>
<br>
`

let wizardStepOne = document.getElementById("wizardStepOne")

let iconName = document.getElementsByName("icon")[0]

let nameInput = document.getElementsByName("name")[0]
let descriptionInput = document.getElementsByName("description")[1]

let uploadInput = document.getElementById("assetTemplateUploads")

let customFileClass = iconName.parentElement

let guildPreviewNode = document.createElement('div');
guildPreviewNode.innerHTML = guildpreviewer.trim();

customFileClass.insertBefore(guildPreviewNode,null)

let polyplus_guildpreview_guildname = document.getElementById("polyplus_guildpreview_guildname")
let polyplus_guildpreview_guilddescription = document.getElementById("polyplus_guildpreview_guilddescription")

let polyplus_guildpreview_guildicon = document.getElementById("polyplus_guildpreview_guildicon")

console.log(descriptionInput)

function updateGuildPreview() {
  if (nameInput.value == "") {
    polyplus_guildpreview_guildname.textContent = "Poly+ Guild Preview"
  } else {
    polyplus_guildpreview_guildname.textContent = nameInput.value 
  }
  
  if (descriptionInput.value == "") {
    polyplus_guildpreview_guilddescription.textContent = "This is preview of your guild. Try change some settings above to see what happened!"
  } else {
    polyplus_guildpreview_guilddescription.textContent = descriptionInput.value 
  }
  
}

function handleFileSelect(evt) {
  let files = evt.target.files;

  let f = files[0];
  
  let reader = new FileReader();

  reader.onload = (function(theFile) {
      return function(e) {
        polyplus_guildpreview_guildicon.src = e.target.result
      };
    })(f);

    reader.readAsDataURL(f);
}

uploadInput.addEventListener('change', handleFileSelect, false);

setInterval(updateGuildPreview, 100);
})