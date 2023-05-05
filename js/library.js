// Tab Upgrades content filler
const upgradeContentFiller = (farm,objectName,farmIcon) => {
    farm.upgrades.forEach((element,i) => {
        document.getElementById('upgrades-tab').insertAdjacentHTML('beforeend',`<div class="update" id="${objectName}-upgrade${i}"></div>`);
        document.getElementById(`${objectName}-upgrade${i}`).insertAdjacentHTML('beforeend', farmIcon); //'<i class="fa-sharp fa-solid fa-hand-pointer"></i>'
        document.getElementById(`${objectName}-upgrade${i}`).addEventListener('click', (event) => {
            element.enable= true;
            farm.upgrading(i,cookie);
            document.getElementById(`cursor-upgrade${i}`).remove();
        });
        document.getElementById(`${objectName}-upgrade${i}`).insertAdjacentHTML('beforeend',
            `<div class="info-upgrade">${element.info}<br>Cost : ${element.price} <i class="fa-solid fa-cookie"></i></div>`);
        document.getElementById(`${objectName}-upgrade${i}`).addEventListener('mouseover', (event) => {
            document.querySelector(`#${objectName}-upgrade${i} .info-upgrade`).classList.add('visible'); 
        });
        document.getElementById(`${objectName}-upgrade${i}`).addEventListener('mouseout', (event) => {
            document.querySelector(`#${objectName}-upgrade${i} .info-upgrade`).classList.remove('visible'); 
        });
    });
}

// Enable buying buildings in store
const store = (cookie, cursorFarming, grandMaFarming, farmFarming) => {
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

export {upgradeContentFiller, store};
