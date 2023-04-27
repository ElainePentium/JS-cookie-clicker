// Init objects price in store
document.querySelector('#store-cursor .stats-store').insertAdjacentHTML('beforeend',`Costs ${cursorFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
document.querySelector('#store-grandma .stats-store').insertAdjacentHTML('beforeend',`Costs ${grandMaFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
document.querySelector('#store-farm .stats-store').insertAdjacentHTML('beforeend',`Costs ${farmFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);

// Tab content viewer
document.getElementById('buildings').addEventListener('click',(event) =>{
    document.getElementById('buildings-tab').classList.add('is-enable');
    document.getElementById('upgrades-tab').classList.remove('is-enable');
    document.getElementById('buildings').classList.add('is-enable');
    document.getElementById('upgrades').classList.remove('is-enable');
})
document.getElementById('upgrades').addEventListener('click',(event) =>{
    document.getElementById('buildings-tab').classList.remove('is-enable');
    document.getElementById('upgrades-tab').classList.add('is-enable');
    document.getElementById('buildings').classList.remove('is-enable');
    document.getElementById('upgrades').classList.add('is-enable');
})

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