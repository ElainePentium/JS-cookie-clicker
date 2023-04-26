// Instance Objects
clickFarming = new Click();
grandMaFarming = new GrandMa();
farmFarming = new Farm();

// A déporter dans un store.js
// Events on buy in store

document.getElementById('store-click').addEventListener('click',(event) => {
    clickFarming.buy();
});
document.getElementById('store-grandma').addEventListener('click',(event) => {
    grandMaFarming.buy();
});
document.getElementById('store-farm').addEventListener('click',(event) => {
    farmFarming.buy();
});

// Right place on army.js
setInterval(function() {
    document.querySelector('#army-click .stats').innerHTML= "";
    document.querySelector('#ClickNumber').innerHTML= "";
    document.querySelector('#ClickNumber').append(`${clickFarming.number}`);
    document.querySelector('#army-click .stats').append(`Each click produces ${clickFarming.inProdCookies} `);
    document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<i class="fa-solid fa-cookie"></i> per second');
    document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-click .stats').append(`${clickFarming.number} clicks produce ${clickFarming.inProdAllCookies.toFixed(1)} `);
    document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<i class="fa-solid fa-cookie"></i> per second');
    document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend',`${clickFarming.productedCookies.toFixed(1)} <i class="fa-solid fa-cookie"></i> clicked so far`);

    document.querySelector('#army-grandma .stats').innerHTML= "";
    document.querySelector('#GrandMaNumber').innerHTML= "";
    document.querySelector('#GrandMaNumber').append(`${grandMaFarming.number}`);
    document.querySelector('#army-grandma .stats').append(`Each grand-mother produces ${grandMaFarming.inProdCookies} `);
    document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend','<i class="fa-solid fa-cookie"></i> per second');
    document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-grandma .stats').append(`${grandMaFarming.number} grand-mother produce ${grandMaFarming.inProdAllCookies} `);
    document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend','<i class="fa-solid fa-cookie"></i> per second');
    document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend',`${grandMaFarming.productedCookies} <i class="fa-solid fa-cookie"></i> cooked so far`);

    document.querySelector('#army-farm .stats').innerHTML= "";
    document.querySelector('#FarmNumber').innerHTML= "";
    document.querySelector('#FarmNumber').append(`${farmFarming.number}`);
    document.querySelector('#army-farm .stats').append(`Each farm produces ${farmFarming.inProdCookies} `);
    document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend','<i class="fa-solid fa-cookie"></i> per second');
    document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-farm .stats').append(`${farmFarming.number} farms produce ${farmFarming.inProdAllCookies} `);
    document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend','<i class="fa-solid fa-cookie"></i> per second');
    document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend',`${farmFarming.productedCookies} <i class="fa-solid fa-cookie"></i> farmed so far`);

    // clickFarming.buy();
    // grandMaFarming.buy();
    // farmFarming.buy();
    clickFarming.produce();
    grandMaFarming.produce();
    farmFarming.produce();

    // A déporter dans un store.js
    // Affiche le prix des objets dans le store
    document.querySelector('#store-click .stats').innerHTML= "";
    document.querySelector('#store-click .stats').append(`Costs ${clickFarming.price.toFixed(2)} `);
    document.querySelector('#store-click .stats').insertAdjacentHTML('beforeend','<i class="fa-solid fa-cookie"></i>');
    document.querySelector('#store-grandma .stats').innerHTML= "";
    document.querySelector('#store-grandma .stats').append(`Costs ${grandMaFarming.price.toFixed(2)} `);
    document.querySelector('#store-grandma .stats').insertAdjacentHTML('beforeend','<i class="fa-solid fa-cookie"></i>');
    document.querySelector('#store-farm .stats').innerHTML= "";
    document.querySelector('#store-farm .stats').append(`Costs ${farmFarming.price.toFixed(2)} `);
    document.querySelector('#store-farm .stats').insertAdjacentHTML('beforeend','<i class="fa-solid fa-cookie"></i>');

},1000);

//<i class="fa-regular fa-cookie"></i>