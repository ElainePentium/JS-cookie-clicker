const statsContainer = document.querySelector("#tab-stats");

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

// <li>🍪 per click: </li>    <li>🍪 clicks: </li>    <li>achievments unlocked: c🍪ming s🍪🍪n</li>

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
        
        console.log(tab)
    })
    const tabPanel = tabPanels[i];
    
}

