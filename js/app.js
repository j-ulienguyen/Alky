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
    }
}

var prox = new Proxy(pkg, handler);

//====================================
//          Functions - State
//====================================
function StoreName(){
    nameInput = document.querySelector("#name-input").value;

    pkg.name = nameInput;
    prox.name = pkg.name;

    console.log("First Name: ", nameInput);
    console.log("Pkg Value: ", pkg.name);
    console.log("Prox Value: ", prox.name);
}

function ChangePage(currentPage){
    // Go to next page
    if(currentPage == "startPage"){
        if(pkg.name == ""){
            alert("Please type in your name.");
            pkg.currentPage = "startPage";
        } else {
            pkg.currentPage = "playersPage";
        }
    }

    else if(currentPage == "playersPage"){
        if(pkg.numPlayers == ""){
            // User did not pick an option
            // Stay on same page
            alert("Please select an option.");
            pkg.currentPage = "playersPage";
        }

        else if(pkg.numPlayers == "single"){
            pkg.currentPage = "moodPage";
        }

        else if(pkg.numPlayers == "multiplayer"){
            pkg.currentPage = "eventsPage";
        }

    }

    else if(currentPage == "moodPage"){
        if(pkg.mood == ""){
            // User did not pick an option
            // Stay on same page
            alert("Please select an option.");
            pkg.currentPage = "moodPage";
        }
            else{
                pkg.currentPage = "strengthPage";
            }
    }

    else if(currentPage == "eventsPage"){
        if(pkg.event == ""){
            // User did not pick an option
            // Stay on same page
            alert("Please select an option.");
            pkg.currentPage = "eventsPage";
        }
            else{
                pkg.currentPage = "strengthPage";
            }
    }

    else if(currentPage == "strengthPage"){
        if(pkg.strength == ""){
            // User did not pick an option
            // Stay on same page
            alert("Please select an option.");
            pkg.currentPage = "strengthPage";
        }
            else{
                pkg.currentPage = "recommendPage";
                ChangeDrinkRecipe();
            }
        }

        else if(currentPage == "recommendPage"){
            pkg.currentPage = "recipePage";
    }

    prox.currentPage = pkg.currentPage;
    currentPage = prox.currentPage;

    console.log("prox.currentPage =", prox.currentPage);
    console.log("var currentPage =", currentPage);
}

function ChangePageBack(currentPage){
    // Go back to previous page
    if(currentPage == "playersPage"){
        pkg.currentPage = "startPage";

        nameInput = document.querySelector("#name-input");
        // Clear field
        nameInput.value = "";
        // Reset name input
        pkg.name = "";
    }

    else if(currentPage == "moodPage" || currentPage == "eventsPage"){
        RemoveActiveIcon();
        pkg.currentPage = "playersPage";
    }

    else if(currentPage == "strengthPage"){
        if(pkg.numPlayers == "single"){
            pkg.currentPage = "moodPage";
        }

        else if(pkg.numPlayers == "multiplayer"){
            pkg.currentPage = "eventsPage";
        }

        RemoveActiveIcon();
    }

    else if(currentPage == "recommendPage" || currentPage == "recipePage"){
        // Restart from beginning
        // pkg.currentPage = "startPage";

        // Restart from previous
        pkg.currentPage = "strengthPage";
    }

    prox.currentPage = pkg.currentPage;
    currentPage = prox.currentPage;
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

        else if(el.id == "multiplayer-icon"){
            el.classList.add("active-icon");
            singleplayer.classList.remove("active-icon");

            pkg.numPlayers = "multiplayer";
            console.log("Multi - prox.numPlayers =", prox.numPlayers);
        }
    }

    else if(currentPage == "moodPage"){
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

        else if(el.id == "heartbroken-icon"){
            el.classList.add("active-icon");

            happy.classList.remove("active-icon");
            fatigue.classList.remove("active-icon");
            stressed.classList.remove("active-icon");

            pkg.mood = "heartbroken";
            console.log("Heartbroken - prox.mood =", prox.mood);
        }

        else if(el.id == "fatigue-icon"){
            el.classList.add("active-icon");

            happy.classList.remove("active-icon");
            heartbroken.classList.remove("active-icon");
            stressed.classList.remove("active-icon");

            pkg.mood = "fatigue";
            console.log("Fatigue - prox.mood =", prox.mood);
        }

        else if(el.id == "stressed-icon"){
            el.classList.add("active-icon");

            happy.classList.remove("active-icon");
            heartbroken.classList.remove("active-icon");
            fatigue.classList.remove("active-icon");

            pkg.mood = "stressed";
            console.log("Stressed - prox.mood =", prox.mood);
        }
    }

    else if(currentPage == "eventsPage"){
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

        else if(el.id == "birthday-icon"){
            el.classList.add("active-icon");

            goingout.classList.remove("active-icon");
            relaxing.classList.remove("active-icon");
            gamenight.classList.remove("active-icon");

            pkg.event = "birthday";
            console.log("Birthday - prox.mood =", prox.event);
        }

        else if(el.id == "relaxing-icon"){
            el.classList.add("active-icon");

            goingout.classList.remove("active-icon");
            birthday.classList.remove("active-icon");
            gamenight.classList.remove("active-icon");

            pkg.event = "relaxing";
            console.log("Relaxing - prox.mood =", prox.event);
        }

        else if(el.id == "gamenight-icon"){
            el.classList.add("active-icon");

            goingout.classList.remove("active-icon");
            birthday.classList.remove("active-icon");
            relaxing.classList.remove("active-icon");

            pkg.event = "gamenight";
            console.log("Game Night - prox.mood =", prox.event);
        }
    }

    else if(currentPage == "strengthPage"){
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

        else if(el.id == "medium-icon"){
            el.classList.add("active-icon");

            light.classList.remove("active-icon");
            hard.classList.remove("active-icon");

            pkg.strength = "medium";
            console.log("Medium - prox.strength =", prox.strength);
        }

        else if(el.id == "hard-icon"){
            el.classList.add("active-icon");

            light.classList.remove("active-icon");
            medium.classList.remove("active-icon");

            pkg.strength = "hard";
            console.log("Hard - prox.strength =", prox.strength);
        }
    }
}

function RemoveActiveIcon(){
    if(currentPage == "moodPage" || currentPage == "eventsPage"){
        icons = document.querySelectorAll(".icons");

        for(i = 0; i < icons.length; i++){
            icons[i].classList.remove("active-icon");
        }
        // Reset mood and event selection
        pkg.mood = "";
        pkg.event = "";
    }

    else if(currentPage == "strengthPage"){
        strengthIcon = document.querySelectorAll(".strength-icon");

        for(i = 0; i < strengthIcon.length; i++){
            strengthIcon[i].classList.remove("active-icon");
        }
        // Reset strength selection
        pkg.strength = "";
    }
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

    // For TABLET screens
    if(window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches){
        if(currentPage == "startPage"){
            // Bigger logo
            logo.style.width = 15 + "rem";
        }

        if(currentPage == "playersPage" ||
            currentPage == "moodPage" ||
            currentPage == "eventsPage" ||
            currentPage == "strengthPage" ||
            currentPage == "recommendPage" ||
            currentPage == "recipePage"){
            // Bigger logo for tablet
            logo.style.width = 10 + "rem";
        }
    }
    //  For MOBILE screens
    else {

        if(currentPage == "startPage"){
            // Bigger logo
            logo.style.width = 15 + "rem";
        }

        if(currentPage == "playersPage" ||
        currentPage == "moodPage" ||
        currentPage == "eventsPage" ||
        currentPage == "strengthPage" ||
        currentPage == "recommendPage" ||
        currentPage == "recipePage"){
            // Smaller logo
            logo.style.width = 8 + "rem";
        }
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

        bubblesBG.style.height = 100 + "vh";
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

        bubblesBG.style.height = 100 + "vh";
    }

    else if(currentPage == "moodPage"){
        ChangeLogo();

        startPage.style.display = "none";
        playersPage.style.display = "none";
        moodPage.style.display = "flex";
        eventsPage.style.display = "none";
        strengthPage.style.display = "none";
        recommendPage.style.display = "none";
        recipePage.style.display = "none";

        bubblesBG.style.height = 100 + "vh";
    }

    else if(currentPage == "eventsPage"){
        ChangeLogo();

        startPage.style.display = "none";
        playersPage.style.display = "none";
        moodPage.style.display = "none";
        eventsPage.style.display = "flex";
        strengthPage.style.display = "none";
        recommendPage.style.display = "none";
        recipePage.style.display = "none";

        bubblesBG.style.height = 100 + "vh";
    }

    else if(currentPage == "strengthPage"){
        ChangeLogo();

        startPage.style.display = "none";
        playersPage.style.display = "none";
        moodPage.style.display = "none";
        eventsPage.style.display = "none";
        strengthPage.style.display = "flex";
        recommendPage.style.display = "none";
        recipePage.style.display = "none";

        bubblesBG.style.height = 100 + "vh";
    }

    else if(currentPage == "recommendPage"){
        ChangeLogo();

        startPage.style.display = "none";
        playersPage.style.display = "none";
        moodPage.style.display = "none";
        eventsPage.style.display = "none";
        strengthPage.style.display = "none";
        recommendPage.style.display = "flex";
        recipePage.style.display = "none";

        bubblesBG.style.height = 100 + "vh";
    }

    else if(currentPage == "recipePage"){
        ChangeLogo();

        startPage.style.display = "none";
        playersPage.style.display = "none";
        moodPage.style.display = "none";
        eventsPage.style.display = "none";
        strengthPage.style.display = "none";
        recommendPage.style.display = "none";
        recipePage.style.display = "block";

        bubblesBG.style.height = 180 + "vh";
    }
}

function MenuToggle(el){
    menuNav = document.querySelector("#menu-nav");

    el.classList.toggle("menu-active");

    if(el.classList.contains("menu-active")){
        // Active Menu
        menuNav.style.display = "flex";
        menuNav.style.opacity = 1;
        menuNav.style.pointerEvents = "auto"; // Allow to click
    } else {
        // Unactive Menu
        menuNav.style.opacity = 0;
        menuNav.style.pointerEvents = "none"; // Disable click
    }
}

function CreateIngredients(){
    ingredientsList = document.querySelector("#ingredients-list");

    // Clear content inside list beforehand
    ingredientsList.innerHTML = "";

    for(i = 0; i < currentRecipe.ingredients.length; i++){
        li = document.createElement("li");
        li.innerText = currentRecipe.ingredients[i];
        ingredientsList.appendChild(li);
    }
}

function CreateInstructions(){
    instructionsList = document.querySelector("#instructions-list");

    // Clear content inside list beforehand
    instructionsList.innerHTML = "";

    for(i = 0; i < currentRecipe.instructions.length; i++){
        li = document.createElement("li");
        li.innerText = currentRecipe.instructions[i];
        instructionsList.appendChild(li);
    }
}

function HeyYourName(){
    recommendName = document.querySelector("#recommend-name");

    // Mood-based - "Hey {Your Name}!"
    if(pkg.mood.length > 0){
        recommendName.innerHTML = "Hey <span class='skyblue'>" + pkg.name + "!</span>";
    }

    // Event-based - "Hey {Your Name} & Friends!"
    else if(pkg.event.length > 0){
        recommendName.style.fontSize = "1.75em";

        if(pkg.name.length <= 7){
            // Fit into one line
            recommendName.innerHTML = "Hey <span class='skyblue'>" + pkg.name + "</span> & friends!";
        } else {
            // Break into next line
            recommendName.innerHTML = "Hey <span class='skyblue'>" + pkg.name + "</span><br>& friends!";
        }
    }
}

function ChangeDrinkRecipe(){
    drinkName = document.querySelectorAll(".drink-name"),
    drinkIcon = document.querySelector("#drink-icon"),
    drinkCTA = document.querySelector("#drink-cta"),
    drinkIntro = document.querySelector("#drink-intro"),
    drinkHeader = document.querySelector("#drink-header");

    if(pkg.mood.length > 0){
        currentRecipe = recipes[pkg.mood][pkg.strength];
        console.log("Test currentRecipe: Mood", currentRecipe);
    }

    else if(pkg.event.length > 0){
        currentRecipe = recipes[pkg.event][pkg.strength];
        console.log("Test currentRecipe: Event", currentRecipe);
    }

    HeyYourName();
    // console.log(drinkName); // Determine class nodes
    drinkName[0].innerHTML = currentRecipe.name; // Drink Name on Recommend Page
    drinkName[1].innerHTML = currentRecipe.name; // Drink Name on Recipe Page
    drinkIcon.src = "img/" + currentRecipe.icon;
    drinkCTA.innerHTML = currentRecipe.cta;
    drinkIntro.innerHTML = currentRecipe.intro;
    drinkHeader.style.backgroundImage = "url(img/hero/" + currentRecipe.image + ")";
    CreateInstructions();
    CreateIngredients();
    DrinkSlideshow();
}

function DrinkSlideshow(){
    // drinkSlideshow = document.querySelector("#slideshow-imgs");
    drinkSlideshow = document.querySelector("#slideshow-container");
    var i = 0;

    setInterval(function(){
        i = i + 1;

        if(i > 2){
            i = 0;
        }

        drinkSlideshow.style.backgroundImage = "url(img/slideshow/"+ currentRecipe.slideshow[i] +")";
    }, 1900);
}

// First step is already hardcoded inside home.html
// Init var to continue to second step
imgNum = 1;
tutNum = 0;

function TutorialSlideshow(btn){
    tutImage = document.querySelector("#tutorial-image"),
    tutHeading = document.querySelector("#tutorial-heading"),
    tutDesc = document.querySelector("#tutorial-desc");

        headings = [
            "Who's Drinking?",
            "Mood or Event?",
            "Alcohol Strength",
            "Here's Your Drink!"
        ];

        steps = [
            "Select the number of players drinking tonight.<br>Will it be a party of one or several?",
            "Depending on the number of players selected, you will be asked either how you're feeling or what's the occasion for tonight.",
            "Select the strength level of your drink. Will it be a light, medium or hard drink? We will quickly generate your results thereafter.",
            "Based on your selections, Alky will provide you with a personalized drink recommendation. Cheers!"
        ];


    if(btn.id == "next-btn"){
        imgNum += 1;
        tutNum += 1;
        // console.log("+1 | imgNum | tutNum", imgNum, tutNum);

        if(imgNum > 4){
            imgNum = 4;
            tutNum = 3;
            // console.log("stop | imgNum | tutNum", imgNum, tutNum);
        }
    }

    if(btn.id == "prev-btn"){

        imgNum -= 1;
        tutNum -= 1;
        // console.log("-1 | imgNum | tutNum", imgNum, tutNum);

        if(imgNum < 1){
            imgNum = 1;
            tutNum = 0;
            // console.log("stop back | imgNum | tutNum", imgNum, tutNum);
        }
    }

    tutImage.src = "img/tut/tutorial-" + imgNum + ".svg";
    tutHeading.innerHTML = headings[tutNum];
    tutDesc.innerHTML = steps[tutNum];
}