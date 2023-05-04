// change color of grandma icon on hover
const grandmaPicture = document.querySelector("#store-grandma img");
const grandmaBox = document.querySelector("#store-grandma");
grandmaBox.addEventListener("mouseover", () => {
    grandmaPicture.src = "img/grandma-primary.svg"
})
grandmaBox.addEventListener("mouseleave", () => {
    grandmaPicture.src = "img/grandma-secondary.svg"
})

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
// const upgradeContentFiller = (arrayFarmingUpgrades,farmName,farmIcon) => {

// }
cursorFarming.upgrades.forEach((element,i) => {
    document.getElementById('upgrades-tab').insertAdjacentHTML('beforeend',`<div class="update" id="cursor-upgrade${i}"></div>`);
    document.getElementById(`cursor-upgrade${i}`).insertAdjacentHTML('beforeend','<i class="fa-sharp fa-solid fa-hand-pointer"></i>');
    document.getElementById(`cursor-upgrade${i}`).addEventListener('click', (event) => {
        cursorFarming.upgrades[i].enable= true;
        cursorFarming.upgrading(i,cookie);
        document.getElementById(`cursor-upgrade${i}`).remove();
    });
    document.getElementById(`cursor-upgrade${i}`).insertAdjacentHTML('beforeend',
        `<div class="info-upgrade">${cursorFarming.upgrades[i].info}<br>Cost : ${cursorFarming.upgrades[i].price} <i class="fa-solid fa-cookie"></i></div>`);  //`<div class="info-upgrade">${cursorFarming.infosUpgrades[i]}</div>`);
    document.getElementById(`cursor-upgrade${i}`).addEventListener('mouseover', (event) => {
        document.querySelector(`#cursor-upgrade${i} .info-upgrade`).classList.add('visible'); 
    });
    document.getElementById(`cursor-upgrade${i}`).addEventListener('mouseout', (event) => {
        document.querySelector(`#cursor-upgrade${i} .info-upgrade`).classList.remove('visible'); 
    });
});
grandMaFarming.upgrades.forEach((element,i) => {
    document.getElementById('upgrades-tab').insertAdjacentHTML('beforeend',`<div class="update" id="grandma-upgrade${i}"></div>`);
    document.getElementById(`grandma-upgrade${i}`).insertAdjacentHTML('beforeend',`<img src="img/grandma-secondary.svg" alt="Grand-mothers" class="grandma-picture">`);
    document.getElementById(`grandma-upgrade${i}`).addEventListener('click', (event) => {
        grandMaFarming.upgrades[i].enable= true;
        grandMaFarming.upgrading(i,cookie);
        document.getElementById(`grandma-upgrade${i}`).remove();
    });
    document.getElementById(`grandma-upgrade${i}`).insertAdjacentHTML('beforeend',
    `<div class="info-upgrade">${grandMaFarming.upgrades[i].info}<br>Cost : ${grandMaFarming.upgrades[i].price} <i class="fa-solid fa-cookie"></i></div>`);
    document.getElementById(`grandma-upgrade${i}`).addEventListener('mouseover', (event) => {
        document.querySelector(`#grandma-upgrade${i} .info-upgrade`).classList.add('visible'); 
    });
    document.getElementById(`grandma-upgrade${i}`).addEventListener('mouseout', (event) => {
        document.querySelector(`#grandma-upgrade${i} .info-upgrade`).classList.remove('visible'); 
    });
});
farmFarming.upgrades.forEach((element,i) => {
    document.getElementById('upgrades-tab').insertAdjacentHTML('beforeend',`<div class="update" id="farm-upgrade${i}"></div>`);
    document.getElementById(`farm-upgrade${i}`).insertAdjacentHTML('beforeend',`<i class="fa-solid fa-tractor"></i>`);
    document.getElementById(`farm-upgrade${i}`).addEventListener('click', (event) => {
        farmFarming.upgrades[i].enable= true;
        farmFarming.upgrading(i,cookie);
        document.getElementById(`farm-upgrade${i}`).remove();
    });
    document.getElementById(`farm-upgrade${i}`).insertAdjacentHTML('beforeend',
        `<div class="info-upgrade">${farmFarming.upgrades[i].info}<br>Cost : ${farmFarming.upgrades[i].price} <i class="fa-solid fa-cookie"></i></div>`);
    document.getElementById(`farm-upgrade${i}`).addEventListener('mouseover', (event) => {
        document.querySelector(`#farm-upgrade${i} .info-upgrade`).classList.add('visible'); 
    });
    document.getElementById(`farm-upgrade${i}`).addEventListener('mouseout', (event) => {
        document.querySelector(`#farm-upgrade${i} .info-upgrade`).classList.remove('visible'); 
    });
});

// Events on buy buildings in store
document.getElementById('store-cursor').addEventListener('click',(event) => {
    cursorFarming.buy(cookie);
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

// Enable buying buildings in store
const store = (cookie) => {
    if(cookie.currentCookies >= cursorFarming.price)
        document.getElementById('store-cursor').classList.add('buying-enabled');
    else
        document.getElementById('store-cursor').classList.remove('buying-enabled');

    if(cookie.currentCookies >= grandMaFarming.price)
        document.getElementById('store-grandma').classList.add('buying-enabled');
    else
        document.getElementById('store-grandma').classList.remove('buying-enabled');

    if(cookie.currentCookies >= farmFarming.price)
        document.getElementById('store-farm').classList.add('buying-enabled');
    else
        document.getElementById('store-farm').classList.remove('buying-enabled');

    cursorFarming.upgrades.forEach((upgrade, i) => {
        if(cursorFarming.number > 0 && upgrade.enable == false && cookie.currentCookies >= upgrade.price)
            document.getElementById(`cursor-upgrade${i}`).classList.add('buying-enabled');
        else if(upgrade.enable == false)
            document.getElementById(`cursor-upgrade${i}`).classList.remove('buying-enabled');
    });

    grandMaFarming.upgrades.forEach((upgrade, i) => {
        if(grandMaFarming.number > 0 && upgrade.enable == false && cookie.currentCookies >= upgrade.price)
            document.getElementById(`grandma-upgrade${i}`).classList.add('buying-enabled');
        else if(upgrade.enable == false)
            document.getElementById(`grandma-upgrade${i}`).classList.remove('buying-enabled');
    });

    farmFarming.upgrades.forEach((upgrade, i) => {
        if(farmFarming.number > 0 && upgrade.enable == false && cookie.currentCookies >= upgrade.price)
            document.getElementById(`farm-upgrade${i}`).classList.add('buying-enabled');
        else if(upgrade.enable == false)
            document.getElementById(`farm-upgrade${i}`).classList.remove('buying-enabled');
    });
}