const statsContainer = document.querySelector("#tab-stats");
const successContainer = document.querySelector("#tab-success");

// DISPLAY STATS & SUCCESS TAB
// tab panels behavior - change active tab on click
const tabs = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll('.tab-panel');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("is-active")
        });
        tabPanels.forEach(tabPanel => {
            tabPanel.classList.remove("is-active") 
        });

        tabs[i].classList.add("is-active");
        tabPanels[i].classList.add("is-active");
        
        // console.log(tab)
    })
    // const tabPanel = tabPanels[i];
}


// STATS TAB - Update Display
const updateCookieStats = (cookie) => {
    cookie.cookiesPerSecond = cursorFarming.inProdAllCookies + grandMaFarming.inProdAllCookies + farmFarming.inProdAllCookies;
    cookie.productedCookies = cookie.clickedCookies + cursorFarming.productedCookies + grandMaFarming.productedCookies + farmFarming.productedCookies;
    cookie.growers = cursorFarming.number + grandMaFarming.number + farmFarming.number;

    cookieTitle.innerHTML = `${cookie.currentCookies.toFixed(2)} cookies`;
    cookiePSTitle.innerHTML = `${cookie.cookiesPerSecond.toFixed(2)} cookies`;

    statsContainer.innerHTML = "";
    statsContainer.insertAdjacentHTML("beforeend",
    `<ul>
        <li><i class="fa-solid fa-cookie"></i>in bank: ${cookie.currentCookies.toFixed(0)}</li>
        <li><i class="fa-solid fa-cookie"></i>baked: ${cookie.productedCookies.toFixed(0)}</li>
        <li>growers owned: ${(cookie.growers).toFixed(0)}</li>
        <li><i class="fa-solid fa-cookie"></i>per second: ${(cookie.cookiesPerSecond).toFixed(2)}</li>
        <li>hand made <i class="fa-solid fa-cookie"></i>: ${cookie.clickedCookies.toFixed(0)}</li>
    </ul>`)
}

// <li>🍪 per click: </li>
// <li>🍪 clicks: </li>
// <li>achievments unlocked: c🍪ming s🍪🍪n</li>



// SUCCESS TAB

// Growers:
// cursorFarming
// grandMaFarming
// farmFarming

// cookies en banque actuellement -> currentCookies: 0,
// cookies produits par seconde -> cookiesPerSecond: 0.00,
// cookies produits par clic -> clickedCookies: 0,
// cookies produits depuis le début de la partie -> productedCookies: 0,
// somme totale de toutes les growers -> growers: 0,
// temps actuel depuis le début de la partie -> gameTime: 0,

// const successObject = {
//     cookie1: {
//         icon: "fa-question",
//         isEnabled: false,
//         title: ""
//     },
//     cookie10: {
//         icon: "fa-question",
//         isCookie10: false,
//         cookie10Title: ""
//     },
//     cursor1: {
//         icon: "fa-question",
//         isCursor1: false,
//         cursorSucces1Title: ""
//     },
//     cursor10: {
//         icon: "fa-question",
//         isCursor10: false,
//         cursorSucces10Title: ""
//     },
//     grandma1: {
//         icon: "fa-question",
//         isGrandma1: false,
//         grandmaSucces1Title: ""},

//     grandma10: {
//         icon: "fa-question",
//         isGrandma10: false,
//         grandmaSucces10Title: ""
//     },
//     farm1: {
//         icon: "fa-question",
//         isFarm1: false,
//         farm1Title: ""
//     },
//     farm10: {
//         icon: "fa-question",
//         isFarm10: false,
//         farm10Title: ""
//     }
// }

successList = ['cookie1', 'cookie10', 'cursor1', 'cursor10', 'grandma1', 'grandma10', 'farm1', 'farm10', 'grower1', 'grower10']
const successes = {};
successList.forEach(success => {
    successes[success] = {
        icon: "fa-question",
        isEnabled: false,
        title: ""
    }
});

// successContainer
const updateSuccess = (cookie) => {
    if(cookie.clickedCookies === 1 && !successes.cookie1.isEnabled) {
        successes.cookie1.icon = "fa-cookie";
        successes.cookie1.isEnabled = true;
        successes.cookie1.title = "Cookie Lover"
    }
    if(cookie.clickedCookies === 10 && !successes.cookie10.isEnabled) {
        successes.cookie10.icon = "fa-cookie";
        successes.cookie10.isEnabled = true;
        successes.cookie10.title = 'Clicastique'
    }
    if(cursorFarming.number === 1 && !successes.cursor1.isEnabled) {
        successes.cursor1.icon = "fa-hand-pointer";
        successes.cursor1.isEnabled = true;
        successes.cursor1.title = "Clic"
    }
    if(cursorFarming.number === 10 && !successes.cursor10.isEnabled) {
        successes.cursor10.icon = "fa-hand-pointer";
        successes.cursor10.isEnabled = true;
        successes.cursor10.title = 'Double Clic'
    }
    if(grandMaFarming.number === 1 && !successes.grandma1.isEnabled) {
        successes.grandma1.icon = "fa-person-cane";
        successes.grandma1.isEnabled = true;
        successes.grandma1.title = "Cookie de Mamie";
    }
    if(grandMaFarming.number === 10 && !successes.grandma10.isEnabled) {
        successes.grandma10.icon = "fa-person-cane";
        successes.grandma10.isEnabled = true;
        successes.grandma10.title = "Baisers Baveux";
    }
    if(farmFarming.number === 1 && !successes.farm1.isEnabled) {
        successes.farm1.icon = "fa-tractor";
        successes.farm1.isEnabled = true;
        successes.farm1.title = "C'est du roots";
    }
    if(farmFarming.number === 10 && !successes.farm10.isEnabled) {
        successes.farm10.icon = "fa-tractor";
        successes.farm10.isEnabled = true;
        successes.farm10.title = "Farminator";
    }
    if(cookie.growers === 1 && !successes.grower1.isEnabled) {
        successes.grower1.icon = "fa-cookie-bite";
        successes.grower1.isEnabled = true;
        successes.grower1.title = "Capitalist";
    }
    if(cookie.growers === 10 && !successes.grower10.isEnabled) {
        successes.grower10.icon = "fa-cookie-bite";
        successes.grower10.isEnabled = true;
        successes.grower10.title = "Serial Cooker";
    }

    successContainer.innerHTML = "";
    successContainer.insertAdjacentHTML("beforeend",
    `<ul>
        <li><i class="fa-solid ${successes.cookie1.icon}" id="first-click"></i>${successes.cookie1.title}</li>
        <li><i class="fa-solid ${successes.cookie10.icon}" id="tenth-click"></i>${successes.cookie10.title}</li>
        <li><i class="fa-solid ${successes.cursor1.icon}" id="first-click"></i>${successes.cursor1.title}</li>
        <li><i class="fa-solid ${successes.cursor10.icon}" id="tenth-click"></i>${successes.cursor10.title}</li>
        <li><i class="fa-solid ${successes.grandma1.icon}" id="first-grandma"></i>${successes.grandma1.title}</li>
        <li><i class="fa-solid ${successes.grandma10.icon}" id="tenth-grandma"></i>${successes.grandma10.title}</li>
        <li><i class="fa-solid ${successes.farm1.icon}" id="first-farm"></i>${successes.farm1.title}</li>
        <li><i class="fa-solid ${successes.farm10.icon}" id="tenth-farm"></i>${successes.farm10.title}</li>
        <li><i class="fa-solid ${successes.grower1.icon}" id="first-grower"></i>${successes.grower1.title}</li>
        <li><i class="fa-solid ${successes.grower10.icon}" id="tenth-grower"></i>${successes.grower10.title}</li>
    </ul>`)
}

/*
Casual baking : cuire 10🍪/s  
Hardore baking : cuire 100🍪/s  
Cookie Monster : cuire 1 000🍪/s  
    Cookie Lover : récolte 1🍪 en cliquant
    Clicastique : récolte 1 000 🍪 en cliquant  
Clic : Acheter son premier curseur  
Double Clic : Acheter 50 curseurs  
    Cookie de Mamie : Acheter sa première mamie  
    Baisers Baveux : Acheter 50 mamies  
Retour à la nature : Acheter sa première ferme  
Récolte ce que tu sèmes : Acheter 50 fermes
    Constructeur : Avoir 100 bâtiments  
Sublimeur : Acheter 20 améliorations  
    Le Cookie d'Or : clique sur un cookie d'or


<i class="fa-solid fa-cookie"></i>
<i class="fa-solid fa-hat-chef"></i>
<i class="fa-solid fa-gingerbread-man"></i>
<i class="fa-solid fa-user-chef"></i>
<i class="fa-solid fa-oven"></i>
<i class="fa-solid fa-refrigerator"></i>

<i class="fa-solid fa-question"></i>
<i class="fa-solid fa-hand-pointer"></i>
<i class="fa-solid fa-person-cane"></i>
<i class="fa-solid fa-tractor"></i>

<i class="fa-solid fa-pickaxe"></i>
<i class="fa-solid fa-industry-windows"></i>
<i class="fa-solid fa-helmet-safety"></i>
<i class="fa-solid fa-industry"></i>

<i class="fa-solid fa-cookie-bite"></i>


*/