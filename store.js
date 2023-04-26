// Init objects price in store
document.querySelector('#store-click .stats').insertAdjacentHTML('beforeend',`Costs ${clickFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
document.querySelector('#store-grandma .stats').insertAdjacentHTML('beforeend',`Costs ${grandMaFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
document.querySelector('#store-farm .stats').insertAdjacentHTML('beforeend',`Costs ${farmFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);

// Events on buy in store
document.getElementById('store-click').addEventListener('click',(event) => {
    clickFarming.buy();
    document.querySelector('#store-click .stats').innerHTML= "";
    document.querySelector('#store-click .stats').insertAdjacentHTML('beforeend',`Costs ${clickFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
});
document.getElementById('store-grandma').addEventListener('click',(event) => {
    grandMaFarming.buy();
    document.querySelector('#store-grandma .stats').innerHTML= "";
    document.querySelector('#store-grandma .stats').insertAdjacentHTML('beforeend',`Costs ${grandMaFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
});
document.getElementById('store-farm').addEventListener('click',(event) => {
    farmFarming.buy();
    document.querySelector('#store-farm .stats').innerHTML= "";
    document.querySelector('#store-farm .stats').insertAdjacentHTML('beforeend',`Costs ${farmFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
});