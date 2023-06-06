

function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}




chrome.storage.local.get("extensionEnabled", function (data) {

    if (data.extensionEnabled == true) {
        if (window.location.href.indexOf("aulavirtual.uji.es/login/index.php") != -1) {

            var button = document.createElement("a");
            button.setAttribute("class", "btn login-identityprovider-btn btn-block");
            button.addEventListener("click", restoreCookies);
            button.innerHTML = "<img src=\"https://raw.githubusercontent.com/teo2peer/Auto-AulaVirtual-Login/main/icon32.png\" alt=\"\" style=\"width: auto;  height: auto;\">Inicia sesión automáticamente con Auto UJI by Teo2Peer";
            // insert button in div class login-identityproviders after the first h2
            var div = document.getElementsByClassName("login-identityproviders")[0];
            var h2 = div.getElementsByTagName("a")[0];
            div.insertBefore(button, h2);
        }
    }
});



