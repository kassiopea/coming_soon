var arrOrderOfAppearence = [headerLogo, mainHeader, mainHeaderContinius, description, socialLinksList, footerCopyright];

var appearenceElem = function (elem){
    elem.classList.add("fade-in");
}
function animateMainHeader (){
    mainHeader.classList.remove("main-header-animate-scale");
}
function fadeInImg(elem){
    elem.classList.remove("animate-img");
}

function getTimeValues(){
    if(windowWidth >= 1024){
        time = 1500;
        timeOut = 800;
    }
}
function generalFadeInBody () {
    body.classList.remove("animate-body-bg");
    getTimeValues();
    for(let i = 0; i < arrOrderOfAppearence.length; i++){
        setTimeout(appearenceElem, time, arrOrderOfAppearence[i]);
        time += timeOut;
    }
    if (windowWidth >= 768) {
        time+=500
        for(let i = 0; i < imgItems.length; i++){
            setTimeout(fadeInImg, time, imgItems[i]);
            time+=500;
        }
    }
}

function imgCloseAndOpen (){
    if (windowWidth >= 768) {
        wrapImg.classList.remove("close");
    }
    else {
        wrapImg.classList.add("close");
    }
}

function __init__ () {
    imgCloseAndOpen();
    generalFadeInBody();
}

window.addEventListener("resize", function() {
       windowWidth = innerWidth;
       __init__();
   }, false);

__init__();
