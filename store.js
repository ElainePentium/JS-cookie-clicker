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

// Tab Upgrades content filler
cursorFarming.enableUpgrades.forEach((element,i) => {
    document.getElementById('upgrades-tab').insertAdjacentHTML('beforeend',`<i class="fa-sharp fa-solid fa-hand-pointer" id="cursor-upgrade${i}"></i>`);
    document.getElementById(`cursor-upgrade${i}`).addEventListener('click', (event) => {
        cursorFarming.enableUpgrades[i]= true;
        document.getElementById(`cursor-upgrade${i}`).remove();
    });
});
grandMaFarming.enableUpgrades.forEach((element,i) => {
    document.getElementById('upgrades-tab').insertAdjacentHTML('beforeend',`<img src="pictures/grandma-secondary.svg" alt="Grand-mothers" class="grandma-picture" id="grandma-upgrade${i}">`);
    document.getElementById(`grandma-upgrade${i}`).addEventListener('click', (event) => {
        grandMaFarming.enableUpgrades[i]= true;
        document.getElementById(`grandma-upgrade${i}`).remove();
    });
});
farmFarming.enableUpgrades.forEach((element,i) => {
    document.getElementById('upgrades-tab').insertAdjacentHTML('beforeend',`<i class="fa-solid fa-tractor" id="farm-upgrade${i}"></i>`);
    document.getElementById(`farm-upgrade${i}`).addEventListener('click', (event) => {
        farmFarming.enableUpgrades[i]= true;
        document.getElementById(`farm-upgrade${i}`).remove();
    });
});

// Events on buy buildings in store
document.getElementById('store-cursor').addEventListener('click',(event) => {
    cursorFarming.buy(cookie);
    document.querySelector(".title h1").innerHTML = `${cookie.currentCookies} cookies`
    document.querySelector('#store-cursor .stats-store').innerHTML= "";
    document.querySelector('#store-cursor .stats-store').insertAdjacentHTML('beforeend',`Costs ${cursorFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
});
document.getElementById('store-grandma').addEventListener('click',(event) => {
    grandMaFarming.buy(cookie);
    document.querySelector('#store-grandma .stats-store').innerHTML= "";
    document.querySelector('#store-grandma .stats-store').insertAdjacentHTML('beforeend',`Costs ${grandMaFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
});
document.getElementById('store-farm').addEventListener('click',(event) => {
    farmFarming.buy(cookie);
    document.querySelector('#store-farm .stats-store').innerHTML= "";
    document.querySelector('#store-farm .stats-store').insertAdjacentHTML('beforeend',`Costs ${farmFarming.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
});
