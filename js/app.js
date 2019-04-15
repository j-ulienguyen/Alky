//====================================
//          State Variables
//====================================
var startPage = document.querySelector("#start-page"),
    playersPage = document.querySelector("#players-page"),
    moodPage = document.querySelector("#mood-page"),
    eventsPage = document.querySelector("#events-page"),
    strengthPage = document.querySelector("#strength-page"),
    recommendPage = document.querySelector("#recommend-page"),
    recipePage = document.querySelector("#recipe-page");

var logo = document.querySelector("#logo"),
    logoContainer = document.querySelector("#logo-container");

var continueBtn = document.querySelector(".continue");


var pkg = {
    currentPage: "startPage",

    name: "",
    numPlayers: "",
    mood: "",
    event: "",
    strength: "",
    recipe: ""
}


//====================================
//              Proxy
//====================================
var handler = {
    set: function(obj, props, value){
        if(props == "currentPage"){
            ChangePageUI(value);
            console.log("check pageui", value);
        }

        if(props == "name"){
            // ChangePageUI('startPage');
        }

        if(props == "numPlayers"){

        }

        if(props == "mood"){

        }

        if(props == "event"){

        }

        if(props == "strength"){

        }

        if(props == "recipe"){

        }
    }
}

var prox = new Proxy(pkg, handler);

//====================================
//          Functions - State
//====================================
// function ChangeState(type, el){
//     if(type == "firstName"){
//         pkg.name = el.value;
//         prox.name = pkg.name;

//         console.log("First Name: ", el.value);
//         console.log("Pkg Value: ", pkg.name);
//         console.log("Prox Value: ", prox.name);

//         // currentPage = "startPage";
//         // pkg.currentPage = "startPage";
//         // prox.currentPage = pkg.currentPage;
//     }
// }

function StoreName(el){
    pkg.name = el.value;
    prox.name = pkg.name;

    console.log("First Name: ", el.value);
    console.log("Pkg Value: ", pkg.name);
    console.log("Prox Value: ", prox.name);
}

function ChangePage(currentPage){
    if(currentPage == "startPage"){
        pkg.currentPage = "playersPage";
    }

    if(currentPage == "playersPage"){
        pkg.currentPage = "moodPage";
    }

    if(currentPage == "moodPage" || currentPage == "eventsPage"){
        pkg.currentPage = "strengthPage";
    }

    if(currentPage == "strengthPage"){
        pkg.currentPage = "recommendPage";
    }

    if(currentPage == "recommendPage"){
        pkg.currentPage = "recipePage";
    }

    prox.currentPage = pkg.currentPage;
    currentPage = prox.currentPage;

    console.log("prox check", prox.currentPage);
    console.log("var check", currentPage);
}



//====================================
//          Functions - UI
//====================================
function ChangeLogo(){
    // Depending on the page, logo size will change accordingly
    currentPage = prox.currentPage;
    console.log("check logo page", currentPage);

    if(currentPage == "startPage"){
        // Bigger logo
        logo.style.width = 15 + "rem";
    }

    if( currentPage == "playersPage" ||
        currentPage == "moodPage" ||
        currentPage == "eventsPage" ||
        currentPage == "strengthPage" ||
        currentPage == "recommendPage"){
            // Smaller logo
            logo.style.width = 8 + "rem";
        }

    if(currentPage == "recipePage"){
        logoContainer.style.display = "none";
    }
}

function ChangePageUI(currentPage){
    if(currentPage == "startPage"){
        ChangeLogo();

        startPage.style.display = "flex";
        playersPage.style.display = "none";
        moodPage.style.display = "none";
        eventsPage.style.display = "none";
        strengthPage.style.display = "none";
        recommendPage.style.display = "none";
        recipePage.style.display = "none";
    }

    if(currentPage == "playersPage"){
        ChangeLogo();

        startPage.style.display = "none";
        playersPage.style.display = "flex";
        moodPage.style.display = "none";
        eventsPage.style.display = "none";
        strengthPage.style.display = "none";
        recommendPage.style.display = "none";
        recipePage.style.display = "none";
    }

    if(currentPage == "moodPage"){
        ChangeLogo();

        startPage.style.display = "none";
        playersPage.style.display = "none";
        moodPage.style.display = "flex";
        eventsPage.style.display = "none";
        strengthPage.style.display = "none";
        recommendPage.style.display = "none";
        recipePage.style.display = "none";
    }

    if(currentPage == "eventsPage"){
        ChangeLogo();

        startPage.style.display = "none";
        playersPage.style.display = "none";
        moodPage.style.display = "none";
        eventsPage.style.display = "flex";
        strengthPage.style.display = "none";
        recommendPage.style.display = "none";
        recipePage.style.display = "none";
    }

    if(currentPage == "strengthPage"){
        ChangeLogo();

        startPage.style.display = "none";
        playersPage.style.display = "none";
        moodPage.style.display = "none";
        eventsPage.style.display = "none";
        strengthPage.style.display = "flex";
        recommendPage.style.display = "none";
        recipePage.style.display = "none";
    }

    if(currentPage == "recommendPage"){
        ChangeLogo();

        startPage.style.display = "none";
        playersPage.style.display = "none";
        moodPage.style.display = "none";
        eventsPage.style.display = "none";
        strengthPage.style.display = "none";
        recommendPage.style.display = "flex";
        recipePage.style.display = "none";
    }

    if(currentPage == "recipePage"){
        ChangeLogo();

        startPage.style.display = "none";
        playersPage.style.display = "none";
        moodPage.style.display = "none";
        eventsPage.style.display = "none";
        strengthPage.style.display = "none";
        recommendPage.style.display = "none";
        recipePage.style.display = "block";
    }
}


// TEMPORARY ==========================
function Default(){
    // headerLogo.style.display = "none";
    // startPage.style.display = "none";
    playersPage.style.display = "none";
    moodPage.style.display = "none";
    eventsPage.style.display = "none";
    strengthPage.style.display = "none";
    recommendPage.style.display = "none";
    recipePage.style.display = "none";
}

// Default();
ChangePageUI('startPage');

//====================================
//          Event Listeners
//====================================