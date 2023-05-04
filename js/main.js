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

    updateCookieStats(cookie);
},100);

console.log("cookie: ", cookie.currentCookies)


// h1 number of cookies update in title
const cookieTitle = document.querySelector(".cookie-title h1");
const cookiePSTitle = document.querySelector("#per-second");
cookieTitle.innerHTML = `${cookie.currentCookies} cookies`;
cookiePSTitle.innerHTML = `per second: ${cursorFarming.inProdAllCookies + grandMaFarming.inProdAllCookies + farmFarming.inProdAllCookies}`;

// cookie behavior - scale in and out on click
const cookieButton = document.querySelector(".cookie");
cookieButton.addEventListener("click", () => {
    cookie.currentCookies++;
    cookie.clickedCookies++;
    cookie.productedCookies++;
    cookieTitle.innerHTML = `${cookie.currentCookies.toFixed(2)} cookies`;
    cookiePSTitle.innerHTML = `${cookie.cookiesPerSecond.toFixed(2)} cookies`;
})