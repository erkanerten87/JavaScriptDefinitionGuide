// Window Object in client side javascript
function moveon() {
    var answer = confirm("Ready to move on?");
    if (answer) window.location = "http://google.com";
}

setTimeout(moveon,60000);

// Scripting documents

function debug(msg) {
    var log = document.getElementById("debuglog");
    if (!log){
        log = document.createElement("div");
        log.id = "debuglog";
        log.innerHTML = "<h1>Debug Log</h1>";
        document.body.appendChild(log);
    }

    var pre = document.createElement("pre");
    var text = document.createElement(msg);
    pre.appendChild(text);
    log.appendChild(pre);
}

debug("my message");

// Scripting CSS