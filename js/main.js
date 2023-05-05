// Import functions library
import {createStoreTab, store} from "./store.js";
import {createArmyTab, army} from "./army.js";
import {createStatsTab, updateCookieStats, updateSuccess} from "./stats.js";

// Main program that refresh cookie status and production
const cursorFarming = new Cursor();
const grandMaFarming = new GrandMa();
const farmFarming = new Farm();
const farms = [cursorFarming, grandMaFarming, farmFarming];

createArmyTab(farms);
createStoreTab(cookie, farms);
createStatsTab();

// Produce and refresh view every 100ms
setInterval(function() {
    army(farms);
    store(cookie, farms);
    cursorFarming.produce(cookie);
    grandMaFarming.produce(cookie);
    farmFarming.produce(cookie);

    updateCookieStats(cookie, cursorFarming, grandMaFarming, farmFarming);
    updateSuccess(cookie, cursorFarming, grandMaFarming, farmFarming)
},100);

// console.log("cookie: ", cookie.currentCookies)


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