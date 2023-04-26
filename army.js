// Instance Objects
clickFarming = new Click();
grandMaFarming = new GrandMa();
farmFarming = new Farm();

setInterval(function() {
    document.querySelector('#army-click .stats').innerHTML= "";
    document.querySelector('#ClickNumber').innerHTML= "";
    document.querySelector('#ClickNumber').append(`${clickFarming.number}`);
    document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend',
        `Each click produces ${clickFarming.inProdCookies} <i class="fa-solid fa-cookie"></i> per second<br>
        ${clickFarming.number} clicks produce ${clickFarming.inProdAllCookies.toFixed(1)} <i class="fa-solid fa-cookie"></i> per second<br>
        ${clickFarming.productedCookies.toFixed(1)} <i class="fa-solid fa-cookie"></i> clicked so far
    `);
    
    document.querySelector('#army-grandma .stats').innerHTML= "";
    document.querySelector('#GrandMaNumber').innerHTML= "";
    document.querySelector('#GrandMaNumber').append(`${grandMaFarming.number}`);
    document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend',
        `Each grand-mother produces ${grandMaFarming.inProdCookies} <i class="fa-solid fa-cookie"></i> per second<br>
        ${grandMaFarming.number} grand-mother produce ${grandMaFarming.inProdAllCookies} <i class="fa-solid fa-cookie"></i> per second<br>
        ${grandMaFarming.productedCookies} <i class="fa-solid fa-cookie"></i> cooked so far
    `);
    
    document.querySelector('#army-farm .stats').innerHTML= "";
    document.querySelector('#FarmNumber').innerHTML= "";
    document.querySelector('#FarmNumber').append(`${farmFarming.number}`);
    document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend',
        `Each farm produces ${farmFarming.inProdCookies} <i class="fa-solid fa-cookie"></i> per second<br>
        ${farmFarming.number} farms produce ${farmFarming.inProdAllCookies} <i class="fa-solid fa-cookie"></i> per second<br>
        ${farmFarming.productedCookies} <i class="fa-solid fa-cookie"></i> farmed so far
    `);
    
    clickFarming.produce();
    grandMaFarming.produce();
    farmFarming.produce();
},1000);