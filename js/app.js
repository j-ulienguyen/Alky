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

var bubblesBG = document.querySelector("#bubbles-container");

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
            console.log("ChangePageUI Value:", value);
        }

        if(props == "name"){

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
        if(pkg.numPlayers == "single"){
            pkg.currentPage = "moodPage";
        }

        if(pkg.numPlayers == "multiplayer"){
            pkg.currentPage = "eventsPage";
        }
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

    console.log("prox.currentPage =", prox.currentPage);
    console.log("var currentPage =", currentPage);
}



//====================================
//          Functions - UI
//====================================
function ChangeLogo(){
    logo = document.querySelector("#logo"),
    logoContainer = document.querySelector("#logo-container");

    // Depending on the page, logo size will change accordingly
    currentPage = prox.currentPage;
    console.log("Current page:", currentPage);

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

        bubblesBG.style.height = 102 + "vh";
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

        bubblesBG.style.height = 112 + "vh";
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

        bubblesBG.style.height = 110 + "vh";
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

        bubblesBG.style.height = 110 + "vh";
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

        bubblesBG.style.height = 110 + "vh";
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

        bubblesBG.style.height = 115 + "vh";
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

function ActiveIcon(el){
    if(currentPage == "playersPage"){
        singleplayer = document.querySelector("#single-icon"),
        multiplayer = document.querySelector("#multiplayer-icon");

        if(el.id == "single-icon"){
            el.classList.add("active-icon");
            multiplayer.classList.remove("active-icon");

            pkg.numPlayers = "single";
            console.log("Single - prox.numPlayers =", prox.numPlayers);
        }

        if(el.id == "multiplayer-icon"){
            el.classList.add("active-icon");
            singleplayer.classList.remove("active-icon");

            pkg.numPlayers = "multiplayer";
            console.log("Multi - prox.numPlayers =", prox.numPlayers);
        }
    }

    if(currentPage == "moodPage"){
        happy = document.querySelector("#happy-icon"),
        heartbroken = document.querySelector("#heartbroken-icon"),
        fatigue = document.querySelector("#fatigue-icon"),
        stressed = document.querySelector("#stressed-icon");

        if(el.id == "happy-icon"){
            el.classList.add("active-icon");

            heartbroken.classList.remove("active-icon");
            fatigue.classList.remove("active-icon");
            stressed.classList.remove("active-icon");

            pkg.mood = "happy";
            console.log("Happy - prox.mood =", prox.mood);
        }

        if(el.id == "heartbroken-icon"){
            el.classList.add("active-icon");

            happy.classList.remove("active-icon");
            fatigue.classList.remove("active-icon");
            stressed.classList.remove("active-icon");

            pkg.mood = "heartbroken";
            console.log("Heartbroken - prox.mood =", prox.mood);
        }

        if(el.id == "fatigue-icon"){
            el.classList.add("active-icon");

            happy.classList.remove("active-icon");
            heartbroken.classList.remove("active-icon");
            stressed.classList.remove("active-icon");

            pkg.mood = "fatigue";
            console.log("Fatigue - prox.mood =", prox.mood);
        }

        if(el.id == "stressed-icon"){
            el.classList.add("active-icon");

            happy.classList.remove("active-icon");
            heartbroken.classList.remove("active-icon");
            fatigue.classList.remove("active-icon");

            pkg.mood = "stressed";
            console.log("Stressed - prox.mood =", prox.mood);
        }
    }

    if(currentPage == "eventsPage"){
        goingout = document.querySelector("#goingout-icon"),
        birthday = document.querySelector("#birthday-icon"),
        relaxing = document.querySelector("#relaxing-icon"),
        gamenight = document.querySelector("#gamenight-icon");

        if(el.id == "goingout-icon"){
            el.classList.add("active-icon");

            birthday.classList.remove("active-icon");
            relaxing.classList.remove("active-icon");
            gamenight.classList.remove("active-icon");

            pkg.event = "goingout";
            console.log("Going Out - prox.mood =", prox.event);
        }

        if(el.id == "birthday-icon"){
            el.classList.add("active-icon");

            goingout.classList.remove("active-icon");
            relaxing.classList.remove("active-icon");
            gamenight.classList.remove("active-icon");

            pkg.event = "birthday";
            console.log("Birthday - prox.mood =", prox.event);
        }

        if(el.id == "relaxing-icon"){
            el.classList.add("active-icon");

            goingout.classList.remove("active-icon");
            birthday.classList.remove("active-icon");
            gamenight.classList.remove("active-icon");

            pkg.event = "relaxing";
            console.log("Relaxing - prox.mood =", prox.event);
        }

        if(el.id == "gamenight-icon"){
            el.classList.add("active-icon");

            goingout.classList.remove("active-icon");
            birthday.classList.remove("active-icon");
            relaxing.classList.remove("active-icon");

            pkg.event = "gamenight";
            console.log("Game Night - prox.mood =", prox.event);
        }
    }

    if(currentPage == "strengthPage"){
        light = document.querySelector("#light-icon"),
        medium = document.querySelector("#medium-icon"),
        hard = document.querySelector("#hard-icon");

        if(el.id == "light-icon"){
            el.classList.add("active-icon");

            medium.classList.remove("active-icon");
            hard.classList.remove("active-icon");

            pkg.strength = "light";
            console.log("Light - prox.strength =", prox.strength);
        }

        if(el.id == "medium-icon"){
            el.classList.add("active-icon");

            light.classList.remove("active-icon");
            hard.classList.remove("active-icon");

            pkg.strength = "medium";
            console.log("Medium - prox.strength =", prox.strength);
        }

        if(el.id == "hard-icon"){
            el.classList.add("active-icon");

            light.classList.remove("active-icon");
            medium.classList.remove("active-icon");

            pkg.strength = "hard";
            console.log("Hard - prox.strength =", prox.strength);
        }
    }
}

//====================================
//          Event Listeners
//====================================


// Default UI
ChangePageUI('startPage');