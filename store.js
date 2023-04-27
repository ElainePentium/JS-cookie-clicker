// Init objects price in store
document.querySelector('#store-cursor .stats-store').insertAdjacentHTML('beforeend',`Costs ${cursorFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
document.querySelector('#store-grandma .stats-store').insertAdjacentHTML('beforeend',`Costs ${grandMaFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
document.querySelector('#store-farm .stats-store').insertAdjacentHTML('beforeend',`Costs ${farmFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);

// Events on buy in store
document.getElementById('store-cursor').addEventListener('click',(event) => {
    cursorFarming.buy();
    document.querySelector('#store-cursor .stats-store').innerHTML= "";
    document.querySelector('#store-cursor .stats-store').insertAdjacentHTML('beforeend',`Costs ${cursorFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
});
document.getElementById('store-grandma').addEventListener('click',(event) => {
    grandMaFarming.buy();
    document.querySelector('#store-grandma .stats-store').innerHTML= "";
    document.querySelector('#store-grandma .stats-store').insertAdjacentHTML('beforeend',`Costs ${grandMaFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
});
document.getElementById('store-farm').addEventListener('click',(event) => {
    farmFarming.buy();
    document.querySelector('#store-farm .stats-store').innerHTML= "";
    document.querySelector('#store-farm .stats-store').insertAdjacentHTML('beforeend',`Costs ${farmFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
});