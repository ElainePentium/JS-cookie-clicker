// Function that implements the content view of armies in the left (quantity, production)
const army = (cookie) => {
    document.querySelector('#army-cursor .stats-army').innerHTML= "";
    document.querySelector('#CursorNumber').innerHTML= "";
    document.querySelector('#CursorNumber').append(`${cursorFarming.number}`);
    document.querySelector('#army-cursor .stats-army').insertAdjacentHTML('beforeend',
        `Each cursor produces ${cursorFarming.inProdCookies} <i class="fa-solid fa-cookie"></i> per second<br>
        ${cursorFarming.number} cursors produce ${cursorFarming.inProdAllCookies.toFixed(1)} <i class="fa-solid fa-cookie"></i> per second<br>
        ${cursorFarming.productedCookies.toFixed(1)} <i class="fa-solid fa-cookie"></i> clicked so far
    `);
    
    document.querySelector('#army-grandma .stats-army').innerHTML= "";
    document.querySelector('#GrandMaNumber').innerHTML= "";
    document.querySelector('#GrandMaNumber').append(`${grandMaFarming.number}`);
    document.querySelector('#army-grandma .stats-army').insertAdjacentHTML('beforeend',
        `Each grand-mother produces ${grandMaFarming.inProdCookies} <i class="fa-solid fa-cookie"></i> per second<br>
        ${grandMaFarming.number} grand-mother produce ${grandMaFarming.inProdAllCookies} <i class="fa-solid fa-cookie"></i> per second<br>
        ${grandMaFarming.productedCookies.toFixed(0)} <i class="fa-solid fa-cookie"></i> cooked so far
    `);
    
    document.querySelector('#army-farm .stats-army').innerHTML= "";
    document.querySelector('#FarmNumber').innerHTML= "";
    document.querySelector('#FarmNumber').append(`${farmFarming.number}`);
    document.querySelector('#army-farm .stats-army').insertAdjacentHTML('beforeend',
        `Each farm produces ${farmFarming.inProdCookies} <i class="fa-solid fa-cookie"></i> per second<br>
        ${farmFarming.number} farms produce ${farmFarming.inProdAllCookies} <i class="fa-solid fa-cookie"></i> per second<br>
        ${farmFarming.productedCookies.toFixed(0)} <i class="fa-solid fa-cookie"></i> farmed so far
    `);
}
