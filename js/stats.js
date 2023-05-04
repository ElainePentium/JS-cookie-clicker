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
        <li>🍪 in bank: ${cookie.currentCookies.toFixed(0)}</li>
        <li>🍪 baked: ${cookie.productedCookies.toFixed(0)}</li>
        <li>growers owned: ${(cookie.growers).toFixed(0)}</li>
        <li>🍪 per second: ${(cookie.cookiesPerSecond).toFixed(2)}</li>
        <li>hand made 🍪: ${cookie.clickedCookies.toFixed(0)}</li>
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

let cursorSuccess1 = "fa-question";
let isCursor1 = false;
let cursorSuccess10 = "fa-question";
let isCursor10 = false;
let grandmaSuccess1 = "fa-question";
let isGrandma1 = false;
let grandmaSuccess10 = "fa-question";
let isGrandma10 = false;
let farmSuccess1 = "fa-question";
let isFarm1 = false;
let farmSuccess10 = "fa-question";
let isFarm10 = false;


// successContainer
const updateSuccess = (cookie) => {
    if(cursorFarming.number === 1 && !isCursor1) {
        cursorSuccess1 = "fa-hand-pointer";
        isCursor1 = true;
    }
    if(cursorFarming.number === 10 && !isCursor10) {
        cursorSuccess10 = "fa-hand-pointer";
        isCursor10 = true;
    }
    if(grandMaFarming.number === 1 && !isGrandma1) {
        grandmaSuccess1 = "fa-person-cane";
        isGrandma1 = true;
    }
    if(grandMaFarming.number === 10 && !isGrandma10) {
        grandmaSuccess10 = "fa-person-cane";
        isGrandma10 = true;
    }
    if(farmFarming.number === 1 && !isFarm1) {
        farmSuccess1 = "fa-tractor";
        isFarm1 = true;
    }
    if(farmFarming.number === 10 && !isFarm10) {
        farmSuccess10 = "fa-tractor";
        isFarm10 = true;
    }

    successContainer.innerHTML = "";
    successContainer.insertAdjacentHTML("beforeend",
    `<ul>
        <li><i class="fa-solid ${cursorSuccess1}" id="first-click"></i></li>
        <li><i class="fa-solid ${cursorSuccess10}" id="tenth-click"></i></li>
        <li><i class="fa-solid ${grandmaSuccess1}" id="first-grandma"></i></li>
        <li><i class="fa-solid ${grandmaSuccess10}" id="tenth-grandma"></i></li>
        <li><i class="fa-solid ${farmSuccess1}" id="first-farm"></i></li>
        <li><i class="fa-solid ${farmSuccess10}" id="tenth-farm"></i></li>
        
    </ul>`)
}

/*
<li><i class="fa-solid fa-question" id="success4"></i></li>
<i class="fa-solid fa-question"></i>
<i class="fa-solid fa-hand-pointer"></i>
<i class="fa-solid fa-person-cane"></i>
<i class="fa-solid fa-tractor"></i>

<i class="fa-solid fa-pickaxe"></i>
<i class="fa-solid fa-industry-windows"></i>
<i class="fa-solid fa-helmet-safety"></i>
<i class="fa-solid fa-industry"></i>
</ul>
*/