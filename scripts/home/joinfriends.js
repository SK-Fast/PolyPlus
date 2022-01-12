setTimeout(() => {
    let colsm8 = document.getElementsByClassName("col-sm-8")[0]

    colsm8.innerHTML = `
    <h3>Currently Playing</h3>
    <div id="polyplus_friends" class="card" style="padding: 15px;">
            <div class="row">
            <div class="col-4 col-sm-2"><a href="/user/10837"><div class="card" style="padding: 5px;">
                    <img src="https://polytoria.com/assets/thumbnails/avatars/headshots/33f0e9d81e0f41b1d2563ff8a2591023.png" style="width: 100%;border-radius: 50%;" title="Plox" alt="Plox"><br>
                    <center><span class="text-success">● </span><span style="font-size: 12px;">Plox</span>
    <br>
    <button class="btn btn-success" style="
        height: 32px;
        font-size: 10px;
    ">Join</button></center>
                    </div></a></div>        </div>
        </div>
    ` + colsm8.innerHTML

    
}, 1000);