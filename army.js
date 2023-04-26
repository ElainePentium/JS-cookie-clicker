toto = new Click();
toto.buy();

// document.querySelector('#army-click .stats').append("JS must add here : numberClick, inProdCookiesClick, inProdAllCookiesClick, productedCookiesByClick");
document.querySelector('#army-grandma .stats').append("JS must add here : numberGMa, inProdCookiesGMa, inProdAllCookiesGMa, productedCookiesByGMa");
document.querySelector('#army-farm .stats').append("JS must add here : numberFarm, inProdCookiesFarm, inProdAllCookiesFarm, productedCookiesByFarm");

document.querySelector('#army-click .stats').append(`NUMBER : ${toto.number} PRICE : ${toto.price}`);