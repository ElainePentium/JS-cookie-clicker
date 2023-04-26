// Instance Objects
clickFarming = new Click();
grandMaFarming = new GrandMa();
farmFarming = new Farm();

setInterval(function() {
    document.querySelector('#army-click .stats').innerHTML= "";
    document.querySelector('#ClickNumber').innerHTML= "";
    document.querySelector('#ClickNumber').append(`${clickFarming.number}`);
    document.querySelector('#army-click .stats').append(`Each click produces ${clickFarming.inProdCookies} per second`);
    document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-click .stats').append(`${clickFarming.number} clicks produce ${clickFarming.inProdAllCookies.toFixed(1)} per second`);
    document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-click .stats').append(`${clickFarming.productedCookies.toFixed(1)} clicked so far`);

    document.querySelector('#army-grandma .stats').innerHTML= "";
    document.querySelector('#GrandMaNumber').innerHTML= "";
    document.querySelector('#GrandMaNumber').append(`${clickFarming.number}`);
    document.querySelector('#army-grandma .stats').append(`Each grand-mother produces ${grandMaFarming.inProdCookies} per second`);
    document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-grandma .stats').append(`${grandMaFarming.number} grand-mother produce ${grandMaFarming.inProdAllCookies} per second`);
    document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-grandma .stats').append(`${grandMaFarming.productedCookies} cooked so far`);

    document.querySelector('#army-farm .stats').innerHTML= "";
    document.querySelector('#FarmNumber').innerHTML= "";
    document.querySelector('#FarmNumber').append(`${clickFarming.number}`);
    document.querySelector('#army-farm .stats').append(`Each farm produces ${farmFarming.inProdCookies} per second`);
    document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-farm .stats').append(`${farmFarming.number} farms produce ${farmFarming.inProdAllCookies} per second`);
    document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-farm .stats').append(`${farmFarming.productedCookies} farmed so far`);

    clickFarming.buy();
    grandMaFarming.buy();
    farmFarming.buy();
    clickFarming.produce();
    grandMaFarming.produce();
    farmFarming.produce();

    // A déporter dans un store.js
    // Affiche le prix des objets dans le store
    document.querySelector('#store-click .stats').innerHTML= "";
    document.querySelector('#store-click .stats').append(`Costs ${clickFarming.price.toFixed(2)}`);
    document.querySelector('#store-grandma .stats').innerHTML= "";
    document.querySelector('#store-grandma .stats').append(`Costs ${grandMaFarming.price.toFixed(2)}`);
    document.querySelector('#store-farm .stats').innerHTML= "";
    document.querySelector('#store-farm .stats').append(`Costs ${farmFarming.price.toFixed(2)}`);


},1000);