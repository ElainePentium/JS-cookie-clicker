// Instance Objects
clickFarming = new Click();
grandMaFarming = new GrandMa();
farmFarming = new Farm();


// document.querySelector('#army-click .stats').append("JS must add here : numberClick, inProdCookiesClick, inProdAllCookiesClick, productedCookiesByClick");
// document.querySelector('#army-grandma .stats').append("JS must add here : numberGMa, inProdCookiesGMa, inProdAllCookiesGMa, productedCookiesByGMa");
// document.querySelector('#army-farm .stats').append("JS must add here : numberFarm, inProdCookiesFarm, inProdAllCookiesFarm, productedCookiesByFarm");

document.querySelector('#army-click .stats').append(`NUMBER : ${clickFarming.number}`);
document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<br>');
document.querySelector('#army-click .stats').append(`PRICE : ${clickFarming.price}`);

document.querySelector('#army-grandma .stats').append(`NUMBER : ${grandMaFarming.number}`);
document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend','<br>');
document.querySelector('#army-grandma .stats').append(`PRICE : ${grandMaFarming.price}`);

document.querySelector('#army-farm .stats').append(`NUMBER : ${farmFarming.number}`);
document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend','<br>');
document.querySelector('#army-farm .stats').append(`PRICE : ${farmFarming.price}`);
