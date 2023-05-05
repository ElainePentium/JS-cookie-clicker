const statsContainer = document.querySelector("#tab-stats");
const successContainer = document.querySelector("#tab-success");

// DISPLAY STATS & SUCCESS TAB
// tab panels behavior - change active tab on click
const createStatsTab = () => {
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
        })
    }
}

// STATS TAB - Update Display
const updateCookieStats = (cookie, cursorFarming, grandMaFarming, farmFarming) => {
    cookie.cookiesPerSecond = cursorFarming.inProdAllCookies + grandMaFarming.inProdAllCookies + farmFarming.inProdAllCookies;
    cookie.productedCookies = cookie.clickedCookies + cursorFarming.productedCookies + grandMaFarming.productedCookies + farmFarming.productedCookies;
    cookie.growers = cursorFarming.number + grandMaFarming.number + farmFarming.number;

    const cookieTitle = document.querySelector(".cookie-title h1");
    const cookiePSTitle = document.querySelector("#per-second");

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

// SUCCESS TAB
const successList = ['cookie1', 'cookie10', 'cursor1', 'cursor10', 'grandma1', 'grandma10', 'farm1', 'farm10', 'grower1', 'grower10']
const successes = {};
successList.forEach(success => {
    successes[success] = {
        icon: "fa-question",
        isEnabled: false,
        title: ""
    }
});

// successContainer
const updateSuccess = (cookie, cursorFarming, grandMaFarming, farmFarming) => {
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

export {createStatsTab, updateCookieStats, updateSuccess};
