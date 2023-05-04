// Main program that refresh cookie status and production
cursorFarming = new Cursor();
grandMaFarming = new GrandMa();
farmFarming = new Farm();

// Produce and refresh view every 100ms
setInterval(function() {
    army(cookie);
    store(cookie);
    cursorFarming.produce(cookie);
    grandMaFarming.produce(cookie);
    farmFarming.produce(cookie);

    cookie.cookiesPerSecond = cursorFarming.inProdAllCookies + grandMaFarming.inProdAllCookies + farmFarming.inProdAllCookies;

    cookieTitle.innerHTML = `${cookie.currentCookies.toFixed(2)} cookies`;
    cookiePSTitle.innerHTML = `${cookie.cookiesPerSecond.toFixed(2)} cookies`;
},100);

console.log("cookie: ", cookie.currentCookies)

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

// h1 number of cookies update in title
const cookieTitle = document.querySelector(".title h1");
const cookiePSTitle = document.querySelector(".title h3");

// cookie behavior - scale in and out on click
const cookieButton = document.querySelector(".cookie");
cookieButton.addEventListener("click", () => {
    cookie.currentCookies++;
    cookieTitle.innerHTML = `${cookie.currentCookies.toFixed(2)} cookies`
})