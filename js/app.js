let header = document.getElementById('header');

eventFunction();

function eventFunction() {
    window.addEventListener('scroll', scrollHeader);
}

function scrollHeader() {
    if (scrollY() > 90) {
        header.classList.add("headercolor");
    } else {
        header.classList.remove("headercolor")
    }
}

function scrollY() {
    return document.body.scrollTop;
}



if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("../serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}